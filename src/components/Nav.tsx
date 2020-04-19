import React from "react";
import { NavItem } from "./NavItem";

const Nav: React.FC = () => {
  return (
    <nav>
      <div>
        Loon<span>Calculator</span>
      </div>

      <ul>
        <NavItem>Item1</NavItem>
        <NavItem>Item2</NavItem>
        <NavItem>Item3</NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
