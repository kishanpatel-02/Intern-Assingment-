import React from 'react'
import { useSelector } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import Circular from './Circular';
import Circular2 from './Circular2';
const Scores = () => {
    const data = useSelector(state => state.data)
    const percentage = data[0].result[0].items[0].onpage_score
    const performance = 60
    const accessibility = 85
    const bestPractices = 89
    const seo = 91
    return (
        <div style={{ width: '100%', height: '50%', display: 'flex', flexDirection: 'column', marginTop: '3%' }}>
            <div style={{ width: '15%', height: '15%', marginLeft: '42%', marginBottom: '2%' }}>
                <Circular title={percentage} stroke={percentage / 100} text={"%"} />
                <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500', marginLeft: '20%' }}>On-Page Score</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <div style={{ width: '10%', height: '15%' }}>
                    <Circular2 value={performance} />
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500', marginLeft: '10%' }}>Performance</p>
                </div>
                <div style={{ width: '10%', height: '15%' }}>
                    <Circular2 value={accessibility} />
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500', marginLeft: '10%' }}>Accessibility</p>
                </div>
                <div style={{ width: '10%', height: '15%' }}>
                    <Circular2 value={seo} />
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500', marginLeft: '30%' }}>SEO</p>
                </div>
                <div style={{ width: '10%', height: '15%' }}>
                    <Circular2 value={bestPractices} />
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500', marginLeft: '10%' }}>BestPractices</p>
                </div>
            </div>
        </div >
    )
}

export default Scores