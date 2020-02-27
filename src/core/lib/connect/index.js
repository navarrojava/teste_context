import React from "react";
import {AppContext} from "../global_context";


const { Consumer } = AppContext
const isFunction = target => typeof target === 'function'
const defualtMapStateToProps = () => ({})
const defualtMapDispatchToProps = () => ({})

export default (originalMapStateToProps, originalMapDispatchToProps) => {
    const mapStateToProps = isFunction(originalMapStateToProps)
        ? originalMapStateToProps
        : defualtMapStateToProps
    const mapDispatchToProps = isFunction(originalMapDispatchToProps)
        ? originalMapDispatchToProps
        : defualtMapDispatchToProps

    return Component => (props) => (
        <Consumer>
            {store => (
                <Component
                    {...props}
                    {...mapStateToProps(store.getState())}
                    {...mapDispatchToProps(store.dispatch)}
                />
            )}
        </Consumer>
    )
}
