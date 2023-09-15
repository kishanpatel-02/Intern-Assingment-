import React from 'react'
import data from './Data.json'
import Circular from './Circular';
import Square from './images/sqaure.png';
import Circle from './images/circle.jpg'
import Triangle from './images/triangle.png'
import { useSelector } from 'react-redux';
const Speed = () => {
    const data = useSelector(state => state.data)
    const array = data[0].result[0].items[0].page_timing
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '13%', height: '13%', margin: '5% 16% 0% 10%' }}>
                    <Circular title={array.duration_time} text={"ms"} stroke={array.duration_time} />
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500', marginLeft: '20%' }}>Duration Time</p>
                </div>
                <div style={{ width: '13%', height: '13%', margin: '5% 16% 0% 5%' }}>
                    <Circular title={array.download_time} stroke={array.download_time} text={"ms"} />
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500' }}>Download Complete</p>
                </div>
                <div style={{ width: '13%', height: '13%', margin: '5% 5% 0% 5%' }}>
                    <Circular title={array.time_to_secure_connection} stroke={array.time_to_secure_connection} text={"ms"} />
                    <p style={{ color: 'gray', fontSize: '1.2rem', fontWeight: '500' }}>Time- Secure Connection</p>
                </div>
            </div>
            <p style={{ marginLeft: '10%', fontSize: '1.5rem' }}>Speed Insights</p>
            <div style={{ display: 'flex', flexDirection: 'row', width: '80%', margin: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column',marginRight:'10%',width:'45%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray',borderTop:'1px solid gray', height: '30%' }}>
                        <img src={Square} alt='/' style={{ width: '3%', height: '20%', marginRight: '5%', marginTop: '6%' }} />
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500' }}>Time to Interact</p>
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500', marginLeft:'auto',  color: 'orangered' }}>{array.time_to_interactive} ms</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray', height: '30%' }}>
                        <img src={Circle} alt='/' style={{ width: '3%', height: '20%', marginRight: '5%', marginTop: '6%' }} />
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500' }}>Download Time</p>
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500', marginLeft:'auto',  color: 'green' }}>{array.download_time} ms</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray', height: '30%' }}>
                        <img src={Triangle} alt='/' style={{ width: '3%', height: '20%', marginRight: '5%', marginTop: '6%' }} />
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500' }}>Connection Time</p>
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500', marginLeft:'auto',  color: 'blue' }}>{array.connection_time} ms</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column',width:'45%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray',borderTop:'1px solid gray', height: '30%' }}>
                        <img src={Square} alt='/' style={{ width: '3%', height: '20%', marginRight: '5%', marginTop: '6%' }} />
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500' }}>Largest Paint</p>
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500', marginLeft:'auto',  color: 'orangered' }}>{array.largest_contentful_paint} ms</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray', height: '30%' }}>
                        <img src={Circle} alt='/' style={{ width: '3%', height: '20%', marginRight: '5%', marginTop: '6%' }} />
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500' }}>Fetch End</p>
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500', marginLeft:'auto',  color: 'green' }}>{array.fetch_end} ms</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray', height: '30%' }}>
                        <img src={Triangle} alt='/' style={{ width: '3%', height: '20%', marginRight: '5%', marginTop: '6%' }} />
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500' }}>Fetch Start</p>
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: '500', marginLeft:'auto',  color: 'blue' }}>{array.fetch_start} ms</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Speed