import { Box, Button, Typography } from "@mui/material";

import { useDialog } from "@/hooks";

const Form: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const [openDialog, closeDialog] = useDialog();
  const [_openDialog, _closeDialog] = useDialog();

  function handleSubmit() {
    onSubmit(closeDialog);
  }

  function handleButtonClick() {
    openDialog({
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
          <Button
            variant="contained"
            color="secondary"
            onClick={() => closeDialog()}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Confirm
          </Button>
        </Box>
      ),
    });
    _openDialog({
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
          <Button
            variant="contained"
            color="secondary"
            onClick={() => _closeDialog()}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Confirm
          </Button>
        </Box>
      ),
    });
  }

  return (
    <Box>
      <Box>
        <Typography>Input 1</Typography>
      </Box>
      <Box>
        <Typography>Input 2</Typography>
      </Box>
      <Box>
        <Typography>Input 3</Typography>
      </Box>
      <Box>
        <Button onClick={handleButtonClick}>Form Confirm</Button>
      </Box>
    </Box>
  );
};

const Test = () => {
  const [openDialog, closeDialog] = useDialog();

  function handleApiCall(callback: any) {
    console.log("Test Api Call");
    callback();
    closeDialog();
  }

  function handleButtonClick() {
    openDialog({
      props: {
        maxWidth: "md",
        fullWidth: true,
      },
      title: "Test Dialog Title 1",
      content: <Form onSubmit={handleApiCall} />,
      actions: (
        <Box
          sx={{
            display: "flex",
            gap: "4px",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => closeDialog()}
          >
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
    <Box>
      <Box>
        <Typography>Test</Typography>
      </Box>
      <Box>
        <Button onClick={handleButtonClick}>Form</Button>
      </Box>
    </Box>
  );
};

export default Test;
