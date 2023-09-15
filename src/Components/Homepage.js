import React from 'react'
import classes from './Homepage.module.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        // fetch(`https://seo-tools.seomator.com/api/onpage/pages`)
        //         .then((response) => console.log(response));
        if(text===''){
            navigate('/')
        }
        else{

            navigate('/home')
        }
    }
    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Webiste URL' onChange={(e) => { setText(e.target.value) }} value={text} className={classes.textinput} />
                <button type='submit' className={classes.btn}>Get A free SEO Report</button>
            </form>
        </div>
    )
}

export default Homepage