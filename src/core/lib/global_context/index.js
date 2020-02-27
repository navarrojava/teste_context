import {createContext} from "react";
import {combineReducers} from "../combineReducers";
import {DashContext, DashReducer} from "../../dash";
import {HomeContext, HomeReducer} from "../../home";

const [rootReducerCombined, initialStateCombined] = combineReducers({
    dash: [DashReducer, DashContext],
    home: [HomeReducer, HomeContext]
});

console.log("initialStateCombined")
console.log(initialStateCombined)

const AppContext = createContext(initialStateCombined);

export  {
    rootReducerCombined,
    AppContext
}
