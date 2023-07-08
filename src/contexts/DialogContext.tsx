import { createContext } from "react";

import { DialogProps } from "../components/Dialog";

const DialogContext = createContext<{
  dialogs: DialogProps[];
  openDialog?: (
    id: string,
    value: Omit<DialogProps, "id" | "open" | "onClose">
  ) => void;
  closeDialog?: (id: string) => void;
  addDialog?: (id: string) => void;
  removeDialog?: (id: string) => void;
}>({
  dialogs: [],
});

export default DialogContext;
