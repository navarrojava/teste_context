import React, {useContext} from 'react';
import {RootContext, rootReducerCombined} from '../_root';
import {useProvider, useStore} from '../_lib';

export default props => {
    const Provider = useProvider(RootContext)
    const context = useContext(RootContext)
    const store = useStore(rootReducerCombined, context);

    return (<Provider store={store}>{props.children}</Provider>)
}
