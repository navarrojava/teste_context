import React from "react";

export const Dash = (props) => {
    console.log(props)
    return (<>
        <br/>
        <div>Dash</div>
        <br/>
        <div>value Home: {props.value_home}</div>
        <div>value Dash: {props.value_dash}</div>
        <button onClick={() => props.actions.increment_home()}>INCREMENT HOME</button>
        <button onClick={() => props.actions.increment_dash()}>INCREMENT DASH</button>
    </>)
}
