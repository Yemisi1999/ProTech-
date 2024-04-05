import React, { useState } from "react";
import Navbar from "./Navbar";
import NavItems from "./NavItems";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const ToggleMenu = ()=>{
    setOpen(!open)
  }
  return (
    <div className="fixed top-0 bg-white w-full z-[999]">
      <Navbar setOpen={setOpen} open={open} ToggleMenu={ToggleMenu}/>
      <NavItems open={open} />
    </div>
  );
};

export default Topbar;
