import React from 'react'
import classes from './Homepage.module.css'
import { useState, useEffect } from "react";
import axios from 'axios';
const Homepage = () => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        // useEffect(() => {
        //     fetch(`https://{api.dataforseo}.com/v3/on_page/pages`)
        //         .then((response) => console.log(response));
        // }, []);
        // fetch(`https://${text}.com/v3/on_page/pages`)
        //         .then((response) => console.log(response));
        axios({
            method: 'post',
            url: `https://${text}/v3/on_page/pages`,
            auth: {
                username: 'kishan292002patel@gmail.com',
                password: 'ccf4ba44657ffa72'
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => console.log(response['data']['tasks']))
            .catch(function (error) {
                console.log(error);
            });

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