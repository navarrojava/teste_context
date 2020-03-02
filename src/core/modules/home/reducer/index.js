import React from "react";

export const actions = {
    INCREMENT_HOME: "increment_home",
    DECREMENT_HOME: "decrement_home",
    RESET: "reset"
};

export default function reducer(state, {type,payload}) {
    switch (type) {

        case actions.INCREMENT_HOME:
            return { ...state, value_home: state.value_home +1};
        case actions.DECREMENT_HOME:
            return { ...state, value_home: state.value_home  -1};
        case actions.RESET:
            return { ...state, value_home: 0 };
        default:
            return state;
    }
}
