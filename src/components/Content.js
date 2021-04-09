import React, { useContext, useReducer } from "react";
import { initialState, reducer } from "../store/reducers";
import { update } from "../store/interactions"
import styled, { css } from 'styled-components'
import { AppContext } from "../index";
import { Provider, useSelector, useDispatch, shallowEqual } from "react-redux";

export default function Content() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
  	<Container>
      {count}
  		<br></br>
  		<Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
  		<Button onClick={() => dispatch({type: 'increment'})}>+</Button>

  	</Container>
  );
}

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

const Container = styled.div`
  text-align: center;
`