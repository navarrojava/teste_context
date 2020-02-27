import React from 'react';


import { AppContext }from '../global_context'

const {Provider} = AppContext

export default props => (
    <Provider value={props.store}>{props.children}</Provider>
);
