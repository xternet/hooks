import { initialState, reducer } from "../store/reducers"
import React, { useContext, useReducer } from "react"
import styled from "styled-components"
import { AppContext } from "../index"
import { update } from "../store/interactions"
import { Provider, useSelector, useDispatch, shallowEqual } from "react-redux"

export default function Nav1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const count = useSelector(state => state);
  // const logFunc = () => {
  //   //console.log('xxx', state)
  //   dispatch({type: 'decrement'})
  // };

  return (
    <div>
    Count: {state.count}
    <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
    </div>
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