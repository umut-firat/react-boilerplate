import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
  IconButton,
  Paper,
  PaperProps,
} from "@mui/material";
import Draggable from "react-draggable";
import { Close as CloseIcon } from "@mui/icons-material";

export interface DialogProps {
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

const Dialog: React.FC<{ dialog: DialogProps }> = ({
  dialog,
}: {
  dialog: DialogProps;
}) => (
  <MuiDialog
    open={dialog.open}
    onClose={dialog.onClose}
    PaperComponent={DraggablePaperComponent}
    {...dialog.props}
  >
    {dialog.title && (
      <MuiDialogTitle
        style={{ cursor: "move" }}
        id="draggable-dialog-title"
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
        }}
        {...dialog.titleProps}
      >
        {dialog.title}
        <IconButton
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
      </MuiDialogTitle>
    )}
    {dialog.content && (
      <MuiDialogContent
        sx={{
          padding: "20px 24px !important",
        }}
        {...dialog.contentProps}
      >
        {dialog.content}
      </MuiDialogContent>
    )}
    {dialog.actions && (
      <MuiDialogActions {...dialog.actionsProps}>
        {dialog.actions}
      </MuiDialogActions>
    )}
  </MuiDialog>
);

export default Dialog;
