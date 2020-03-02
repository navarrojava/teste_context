import { dashActionTypes } from "../index";

export default dispatch => ({
  increment_dash: async () => {
    await mockPromise(500);

    dispatch({
      type: dashActionTypes.INCREMENT_DASH
    });
  },

  decrement_dash: async () => {
    dispatch({
      type: dashActionTypes.DECREMENT_DASH
    });
  }
});

const mockPromise = (milliseconds = 2000) => {
  return new Promise(resolve => setTimeout(() => resolve(), milliseconds));
};
