import React from 'react'
import classes from './Header.module.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className={classes.header}>
            <div className={classes.img_container}>
                {/* <Link to='/' style={{textDecoration:'none',marginLeft:'15%'}}><img src={logoimg} className={classes.header_img} alt='' /></Link> */}
                <Link to='/home' style={{ textDecoration: 'none', marginTop: '8%', marginLeft: '8%', color: 'black' }}><h4 className={classes.logo_text} style={{ color: 'white', fontFamily: 'Roboto', fontSize: '1.23rem', fontWeight: '600' }}>SEODisplayer</h4></Link>
            </div>
            <div className={classes.header_content}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'rgb(10, 18, 30,0.75)' }}><h5 style={{ color: 'white', fontFamily: 'Roboto sans-serif', fontSize: '1.23rem', fontWeight: '400' }}>Home</h5></Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'rgb(10, 18, 30,0.75)' }}><h5 style={{ color: 'white', fontFamily: 'Roboto sans-serif', fontSize: '1.23rem', fontWeight: '400' }}>Search</h5></Link>
                <Link to="/speed" style={{ textDecoration: 'none', color: 'rgb(10, 18, 30,0.75)' }}><h5 style={{ color: 'white', fontFamily: 'Roboto sans-serif', fontSize: '1.23rem', fontWeight: '400' }}>Speed Insights</h5></Link>
                <Link to="/onpageresults" style={{ textDecoration: 'none', color: 'rgb(10, 18, 30,0.75)' }}><h5 style={{ color: 'white', fontFamily: 'Roboto sans-serif', fontSize: '1.23rem', fontWeight: '400' }}>On-Page Results</h5></Link>
                <Link to="/checks" style={{ textDecoration: 'none', color: 'rgb(10, 18, 30,0.75)' }}><h5 style={{ color: 'white', fontFamily: 'Roboto sans-serif', fontSize: '1.23rem', fontWeight: '400' }} >Checks</h5></Link>
                <Link to="/tags" style={{ textDecoration: 'none', color: 'rgb(10, 18, 30,0.75)' }}><h5 style={{ color: 'white', fontFamily: 'Roboto sans-serif', fontSize: '1.23rem', fontWeight: '400' }}>Tags</h5></Link>
            </div>
        </nav>
    )
}

export default Header