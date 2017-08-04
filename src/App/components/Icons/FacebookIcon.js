import React from 'react';


const FacebookIcon = (props) => {

    let backgroundColor = props.selectedIndex === props.id ? "#7BAFE4" : "#606060";
    let width = props.width ? props.width : "30px";
    let height = width;
    let outLineColor = props.color ? props.color : "#ccc";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} id="Layer_1" version="1.1" viewBox="0 0 128 128" width={width} type="text/css">
            <path style={{'fill':backgroundColor, "transition": "fill 0.8s ease" }}d="M77.349,28.008c2.471,0,7.685,0,12.513,0c0-2.542,0-11.32,0-19.428c-6.445,0-13.778,0-17.013,0  c-24.101,0-23.531,18.678-23.531,21.468c0,2.792,0,15.261,0,15.261H38.137V63.97h11.181v55.449h22.966V63.97h15.411  c0,0,1.443-8.949,2.143-18.731c-2.007,0-17.467,0-17.467,0s0-10.857,0-12.76C72.37,30.573,74.873,28.008,77.349,28.008z" /></svg>
    )

}


export default FacebookIcon;