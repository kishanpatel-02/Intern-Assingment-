import React from 'react'
import classes from './Homepage.module.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RingLoader } from 'react-spinners';
const Homepage = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(false);
        let error = false;
        const response = await fetch('http://localhost:3001/api/dataforseo/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ target: text })
        })
        if (response.ok) {
            const data = await response.json();
            if (data[0].status_code === 20000) {
                console.log('Received data:', data);
                dispatch({ type: 'update', payload: {data:data }});
            }
            else {
                error=true;
                alert(data[0].status_code)
            }
        } else {
            error = true;
            alert(response.status)
        }

        console.log(text)
        console.log(error)
        if (text !== '' && error) {
            // setLoading(true);
            setLoading(true)
            navigate('/')
        }
        else {
            setLoading(true);
            navigate('/home')
        }
    }
    return (
        <div className={classes.container}>
            {loading ? <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Webiste URL' onChange={(e) => { setText(e.target.value) }} value={text} className={classes.textinput} />
                <button type='submit' className={classes.btn}>Get A free SEO Report</button>
            </form> :
                <div style={{ marginLeft: '40%', marginTop: '12%' }}>
                    <RingLoader color="#36d7b7" size={250} />
                </div>
            }
        </div>
    )
}

export default Homepage