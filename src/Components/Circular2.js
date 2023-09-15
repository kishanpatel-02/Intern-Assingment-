import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const Circular2 = (props) => {
    return (
        <CircularProgressbar
            value={props.value}
            text={`${props.value}%`}
            styles={{
                root: {},
                path: {
                    stroke: `rgba(234 ,190 ,10, ${props.value / 100})`,
                    strokeLinecap: 'butt',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                trail: {
                    stroke: '#d6d6d6',
                    strokeLinecap: 'butt',
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                text: {
                    fill: 'rgb(234 ,190 ,10)',
                    fontSize: '1.5rem',
                },
                background: {
                    fill: 'rgb(234 ,190 ,10)',
                },
            }}
        />
    )
}

export default Circular2