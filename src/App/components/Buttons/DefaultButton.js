import React from 'react';
require('./buttonstyles.scss')
const DefaultButton = (props) => {

    return(
        <button onClick={props.onClick} className={props.class}>{props.label}</button>
    )


}

export default DefaultButton;