import React from "react";
import {AppContext} from "../global_context";


const { Consumer } = AppContext
const isFunction = target => typeof target === 'function'
const defaultMapStateToProps = () => ({})
const defaultMapDispatchToProps = () => ({})

export default (originalMapStateToProps, originalMapDispatchToProps) => {
    const mapStateToProps = isFunction(originalMapStateToProps)
        ? originalMapStateToProps
        : defaultMapStateToProps
    const mapDispatchToProps = isFunction(originalMapDispatchToProps)
        ? originalMapDispatchToProps
        : defaultMapDispatchToProps

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
