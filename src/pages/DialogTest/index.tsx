import { Box, Button, Typography } from "@mui/material";

import { useDialog } from "@/hooks";

const Test = () => {
  const dialog = useDialog();

  function handleButtonClick() {
    dialog.openDialog({
      props: {
        maxWidth: "md",
        fullWidth: true,
      },
      title: "Test Dialog Title 1",
      content: (
        <Box>
          <Typography>Test Dialog Content</Typography>
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
            onClick={() => dialog.closeDialog()}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("Submit")}
          >
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
        <Button onClick={handleButtonClick}>Dialog</Button>
      </Box>
    </Box>
  );
};

export default Test;
