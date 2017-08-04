import React from 'react';


const HamburgerIcon = (props) => {

    let backgroundColor = props.selectedIndex === props.id ? "#7BAFE4" : "#606060";
    let width = props.width ? props.width : "30px";
    let height = props.height ? props.height : "30px";
    let outLineColor = props.color ? props.color : "#ccc";

    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 41 24">
            <g stroke={backgroundColor} stroke-width="1" fill={backgroundColor} stroke-linecap="round">
                <path style={{'stroke':backgroundColor,'fill':backgroundColor, "transition": "fill 0.8s ease" }} d="M1.507 23h38.071M1.507 12h38.071M1.507 1h50.071" />
            </g>
        </svg>
    )

}





export default HamburgerIcon;


