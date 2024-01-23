import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";

function Header() {
  return (
    <header>
        <nav>
            <Logo />
            <Button>Home</Button>
        </nav>
    </header>
  )
}

export default Header;