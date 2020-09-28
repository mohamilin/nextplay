import React from 'react';
import logo from '../logo.svg';
import '../App.css';
function Home() {
    return (
       <>
        <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{letterSpacing: 20}} >
          NEXTPLAYS
        </h1>
        <p style={{marginTop: -15, letterSpacing: 10}}>The Movie Application </p>
    </div>
       </>
    )
}

export default Home
