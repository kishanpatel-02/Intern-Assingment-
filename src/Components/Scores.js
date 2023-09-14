import React from 'react'
import classes from './Scores.module.css'
import data from './Data.json'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Scores = () => {
    const percentage = data.tasks[0].result[0].items[0].meta.onpage_score
    return (
        <div  style={{ width: '100%', height: '30%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div  style={{ width: '10%', height: '15%' }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `rgba(62, 152, 199, ${percentage / 100})`,
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
                            fill: '#f88',
                            fontSize: '1.5rem',
                        },
                        background: {
                            fill: '#3e98c7',
                        },
                    }}
                />
            </div >
            <p style={{color:'gray',fontSize:'1.2rem',fontWeight:'500'}}>On-Page Score</p>
        </div >

    )
}

export default Scores