import React from 'react'
// import ReactDOM from 'react-dom'
import { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({children ,initialState, reducer,}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);