import React, { useState } from "react";
import Navbar from "./Navbar";
import NavItems from "./NavItems";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const ToggleMenu = ()=>{
    setOpen(!open)
  }
  return (
    <>
      <Navbar setOpen={setOpen} open={open} ToggleMenu={ToggleMenu}/>
      <NavItems open={open} />
    </>
  );
};

export default Topbar;
