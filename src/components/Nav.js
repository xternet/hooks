import { initialState, reducer } from "../store/reducers";
import React, { useContext, useReducer } from "react";
import styled from "styled-components";
import { AppContext } from "../index";
import { update } from "../store/interactions"
import Nav1 from "./Nav1"
import { Provider, useSelector, useDispatch, shallowEqual } from "react-redux"

export default function Nav() {
  // const { dispatch } = useContext(AppContext);
    const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };

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
      <NavToggle onClick={toggleTheme}>Toggle theme</NavToggle>
      <Nav1 />
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.navColor};
  min-height: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.textColor};
  list-style: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavLink = styled.div`
  display: block;
  padding: 1rem;
  transition: 250ms ease background-color;
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;

const NavToggle = styled(NavLink)`
  text-decoration: underline;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;