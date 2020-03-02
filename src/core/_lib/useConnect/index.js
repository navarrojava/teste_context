import React from "react";

const isFunction = target => typeof target === 'function'
const defaultMapStateToProps = () => ({})
const defaultMapDispatchToProps = () => ({})

export default appContext => (originalMapStateToProps, originalMapDispatchToProps) => {

    const { Consumer } = appContext

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
