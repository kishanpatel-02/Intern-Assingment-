import React from 'react'
// import classes from './Display.module.css'
import Score from './Scores'
import Htags from './Htags'
import OnpageResults from './Onpageresults'
import Checks from './Checks'
const Display = () => {
  return (
    <div style={{backgroundColor:'#ecececa6'}}>
      <h1 style={{textAlign:'center',marginBottom:'3%'}}>Results for https://www.youtube.com/</h1>
      <Score />
      <OnpageResults/>
      <Checks/>
      <Htags/>
    </div>
  )
}

export default Display