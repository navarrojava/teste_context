import { homeActionsTypes } from "../index";

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

const mockPromise = (milliseconds = 2000) => {
  return new Promise(resolve => setTimeout(() => resolve(), milliseconds));
};
