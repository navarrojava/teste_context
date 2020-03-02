import { dashActionTypes } from "../index";

export default dispatch => ({
  increment_dash: async () => {
      dispatch({
          type: dashActionTypes.LOADDING
      });

    await mockPromise();

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

const mockPromise = () => {
  return new Promise(resolve => setTimeout(() => resolve(), 3000));
};


