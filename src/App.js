import React from "react"
import {Router, Link} from "@reach/router"
import Home from "./containers/home";
import Dash from "./containers/dash";
import {AppContext , rootReducerCombined} from "./core/lib/global_context";

import useStore from './core/lib/useStore'
import Provider from './core/lib/provider'



export default () => {
    const context = React.useContext(AppContext)
    const store = useStore(rootReducerCombined, context);
    return (
        <Provider store={store}>
            <Link to="home">Home</Link> |{"   "}
            <Link to="dash">Dashboard</Link>
            <Router>
                <Home path="home"/>
                <Dash path="dash"/>
            </Router>
        </Provider>
    )
}
