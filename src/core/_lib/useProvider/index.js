import React from 'react';


export default globalContext => props => {

    const {Provider} = globalContext

    return (<Provider value={props.store}>{props.children}</Provider>)
}
