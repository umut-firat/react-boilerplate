import { useCallback, useContext, useMemo } from "react";
import * as uuid from "uuid";

import { DialogProps } from "../components/Dialog";
import { DialogContext } from "../contexts";

export const useDialog = () => {
  const { openDialog, closeDialog, addDialog, removeDialog } =
    useContext(DialogContext);

  const id = useMemo(() => uuid.v4(), []);

  const handleDialogOpen = useCallback(
    (value: Omit<DialogProps, "id" | "open" | "onClose">) => {
      addDialog?.(id);
      openDialog?.(id, value);
    },
    [id, addDialog, openDialog]
  );

  const handleDialogClose = useCallback(() => {
    closeDialog?.(id);
    removeDialog?.(id);
  }, [id, closeDialog, removeDialog]);

  return [handleDialogOpen, handleDialogClose];
};
