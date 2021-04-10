import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../store/actions"
import React from "react";
import {
  Button,
  NavBar,
  NavLink,
  NavMenu,
  NavToggle,
} from "../styles/rest"

//T0d0 add logic to current login state

export default function Nav() {
  const account = useSelector(state => state.account);
  const balance = useSelector(state => state.balance);
  console.log(balance)
  const dispatch = useDispatch();

  const logFunc = async () => {
    await window.ethereum.enable()
  };

  return (
    <NavBar>
      <NavMenu>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Contact</NavLink>
      </NavMenu>
      <NavToggle onClick={() => dispatch(toggleTheme())}>Toggle theme</NavToggle>
      {account}{' '}{balance}
      <Button onClick={logFunc}>Login</Button>
    </NavBar>
  );
}