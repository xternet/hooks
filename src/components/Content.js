import React, { useContext, useReducer } from "react";
import { initialState, reducer } from "../store/reducers";
import { update } from "../store/interactions"
import styled, { css } from 'styled-components'
import { AppContext } from "../index";
import { count } from "../store/actions"

export default function Content() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  	<Container>
  		Count: {state.count}
      Account: {state.account}
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