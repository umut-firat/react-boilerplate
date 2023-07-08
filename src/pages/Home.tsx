import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  DialogProps as MuiDialogProps,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContentProps as MuiDialogContentProps,
  DialogActionsProps as MuiDialogActionsProps,
  IconButton,
  Paper,
  PaperProps,
  Typography,
} from "@mui/material";
import Draggable from "react-draggable";
import { Close as CloseIcon } from "@mui/icons-material";
import * as uuid from "uuid";

interface DialogProps {
  id: string;
  open: boolean;
  onClose?: () => void;
  props?: Omit<MuiDialogProps, "open" | "onClose">;
  title?: React.ReactNode | string | JSX.Element;
  titleProps?: MuiDialogTitleProps;
  content?: React.ReactNode | string | JSX.Element;
  contentProps?: MuiDialogContentProps;
  actions?: React.ReactNode | string | JSX.Element;
  actionsProps?: MuiDialogActionsProps;
}

const DraggablePaperComponent = (props: PaperProps) => (
  <Draggable
    handle="#draggable-dialog-title"
    cancel={'[class*="MuiDialogContent-root"]'}
  >
    <Paper {...props} />
  </Draggable>
);

const Home = () => {
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);

  const closeDialog = useCallback((id: string) => {
    setDialogs((previousDialogs) =>
      previousDialogs.filter((dialog) =>
        dialog.id !== id ? { id, onClose: undefined, open: false } : dialog
      )
    );
  }, []);

  const openDialog = useCallback(
    (id: string, value: Omit<DialogProps, "id" | "open" | "onClose">) => {
      setDialogs((previousDialogs) =>
        previousDialogs.map((dialog) =>
          dialog.id === id ? { ...dialog, open: true, ...value } : dialog
        )
      );
    },
    []
  );

  const addDialog = useCallback(
    (id: string) => {
      const newDialog = {
        id,
        onClose: () => closeDialog(id),
        open: false,
      } satisfies DialogProps;
      setDialogs((previousDialogs) => [...previousDialogs, newDialog]);
    },
    [closeDialog]
  );

  const removeDialog = useCallback((id: string) => {
    setDialogs((previousDialogs) =>
      previousDialogs.filter((dialog) => dialog.id !== id)
    );
  }, []);

  const fakeUseDialog = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const id: string = uuid.v4();

    const handleOpen = (
      value: Omit<DialogProps, "id" | "open" | "onClose">
    ) => {
      addDialog(id);
      openDialog(id, value);
    };
    const handleClose = () => {
      closeDialog(id);
      removeDialog(id);
    };
    return [handleOpen, handleClose];
  };

  function handleButtonClick() {
    const [openDialog1, closeDialog1] = fakeUseDialog();
    const [openDialog2, closeDialog2] = fakeUseDialog();
    openDialog1({
      props: {
        maxWidth: "md",
        fullWidth: true,
      },
      title: "Test Dialog Title 1",
      content: (
        <Box>
          <Typography>Test Dialog Content 1</Typography>
        </Box>
      ),
      actions: (
        <Box
          sx={{
            display: "flex",
            gap: "4px",
          }}
        >
          <Button variant="contained" color="secondary" onClick={closeDialog1}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Confirm
          </Button>
        </Box>
      ),
    });
    openDialog2({
      props: {
        maxWidth: "md",
        fullWidth: true,
      },
      title: "Test Dialog Title 2",
      content: (
        <Box>
          <Typography>Test Dialog Content 2</Typography>
        </Box>
      ),
      actions: (
        <Box
          sx={{
            display: "flex",
            gap: "4px",
          }}
        >
          <Button variant="contained" color="secondary" onClick={closeDialog2}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Confirm
          </Button>
        </Box>
      ),
    });
  }

  return (
    <>
      <Box>
        <Box>
          <Typography>Home</Typography>
        </Box>
        <Box>
          <Button onClick={handleButtonClick}>Dialog</Button>
        </Box>
      </Box>
      {dialogs.map((dialog, index) => (
        <MuiDialog
          key={`dialog-${index}`}
          id={`dialog-${index}`}
          aria-labelledby="draggable-dialog-title"
          open={dialog.open}
          onClose={dialog.onClose}
          PaperComponent={DraggablePaperComponent}
          {...dialog.props}
        >
          <MuiDialogTitle
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            sx={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
            }}
            {...dialog.titleProps}
          >
            {dialog.title}
            {dialog.onClose ? (
              <IconButton
                aria-label="close"
                onClick={dialog.onClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
          <MuiDialogContent
            sx={{
              padding: "20px 24px !important",
            }}
            {...dialog.contentProps}
          >
            {dialog.content}
          </MuiDialogContent>
          <MuiDialogActions {...dialog.actionsProps}>
            {dialog.actions}
          </MuiDialogActions>
        </MuiDialog>
      ))}
    </>
  );
};

export default Home;
