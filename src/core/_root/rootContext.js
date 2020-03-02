import {createContext} from "react";
import {combineReducers} from "../_lib";

import {HomeContext, HomeReducer} from "../modules/home";
import {DashContext, DashReducer} from "../modules/dash";


const [rootReducerCombined, initialStateCombined] = combineReducers({
    dash: [DashReducer,DashContext],
    home: [HomeReducer, HomeContext],
});

const RootContext = createContext(initialStateCombined);

export  {
    rootReducerCombined,
    RootContext
}
