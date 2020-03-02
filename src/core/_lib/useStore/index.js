import { useReducer } from "react";

export default (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    getState: () => state,
    dispatch
  };
};
