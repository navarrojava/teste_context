import React from "react";

const actions = {
    INCREMENT_DASH: "increment_dash",
    DECREMENT_DASH: "decrement_dash",
    RESET: "reset"
};

export default function reducer(state, action) {
    switch (action.type) {
        case actions.INCREMENT_DASH:
            return {...state, value_dash: state.value_dash + 1};
        case actions.DECREMENT_DASH:
            return {...state, value_dash: state.value_dash - 1};
        case actions.RESET:
            return {...state, value_dash: 0};
        default:
            return state;
    }
}
