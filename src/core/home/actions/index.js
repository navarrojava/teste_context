import { homeActionsTypes } from "../";

export default dispatch => ({
  increment_home: async () => {
    await mockPromise();

    dispatch({
      type: homeActionsTypes.INCREMENT_HOME
    });
  },

  decrement_home: async () => {
    dispatch({
      type: homeActionsTypes.DECREMENT_HOME
    });
  }
});

const mockPromise = (miliseconds = 2000) => {
  return new Promise(resolve => setTimeout(() => resolve(), miliseconds));
};
