import React from 'react'
import classes from './Scores.module.css'
import data from './Data.json'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Scores = () => {
    const percentage = data.tasks[0].result[0].items[0].meta.onpage_score
    const performance = 60
    const accessibility = 85
    const bestPractices = 89
    const seo = 91
    return (
        <div style={{ width: '100%', height: '30%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '10%', height: '15%',marginLeft:'45%',marginBottom:'2%' }}>
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
                <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500' }}>On-Page Score</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%',justifyContent:'space-evenly' }}>
                <div style={{ width: '6%', height: '15%' }}>
                    <CircularProgressbar
                        value={performance}
                        text={`${performance}%`}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgba(234 ,190 ,10, ${performance / 100})`,
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
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500' }}>Performance</p>
                </div>
                <div style={{ width: '6%', height: '15%' }}>
                    <CircularProgressbar
                        value={accessibility}
                        text={`${accessibility}%`}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgba(234 ,190 ,10, ${accessibility / 100})`,
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
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500' }}>Accessibility</p>
                </div>
                <div style={{ width: '6%', height: '15%' }}>
                    <CircularProgressbar
                        value={seo}
                        text={`${seo}%`}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgba(234 ,190 ,10, ${seo / 100})`,
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
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500' }}>SEO</p>
                </div>
                <div style={{ width: '6%', height: '15%' }}>
                    <CircularProgressbar
                        value={bestPractices}
                        text={`${bestPractices}%`}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgba(234 ,190 ,10, ${bestPractices / 100})`,
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
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500' }}>BestPractices</p>
                </div>
            </div>
        </div >
    )
}

export default Scores