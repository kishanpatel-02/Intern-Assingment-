import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const Circular = (props) => {
    return (
        <CircularProgressbar
            value={props.title}
            text={`${props.title}${props.text}`}
            styles={{
                root: {},
                path: {
                    stroke: `rgba(62, 152, 199, ${props.stroke})`,
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
                    fill: 'rgb(45 63 112)',
                    fontSize: '1.5rem',
                },
                background: {
                    fill: '#3e98c7',
                },
            }}
        />
    )
}

export default Circular