import { useCallback, useState } from "react";

import { DialogProps } from "../components/Dialog";
import { DialogContext } from "../contexts";

const DialogProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);

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

  const closeDialog = useCallback((id: string) => {
    setDialogs((previousDialogs) =>
      previousDialogs.map((dialog) =>
        dialog.id === id ? { id, onClose: undefined, open: false } : dialog
      )
    );
  }, []);

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

  return (
    <DialogContext.Provider
      value={{
        dialogs,
        openDialog,
        closeDialog,
        addDialog,
        removeDialog,
      }}
    >
      {props.children}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
