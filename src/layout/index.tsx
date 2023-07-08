import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Dialog } from "../components";
import { DialogContext } from "../contexts";

const Layout = () => {
  const dialogs = useContext(DialogContext);

  return (
    <>
      <Outlet />
      {dialogs.dialogs.map((dialog, index) => (
        <Dialog key={`dialog-${index}`} dialog={dialog} />
      ))}
    </>
  );
};

export default Layout;
