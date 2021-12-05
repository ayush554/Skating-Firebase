import React from 'react';
import Card from '../components/Card';
export const Home = () => {
    return (
        <div>
            <h3>Nearby Parks</h3>
        <div id="container">
            <div id="left"><Card></Card></div>
            <div id="middle"><Card></Card></div>
            <div id="right"><Card></Card></div>
        </div>
        
       <h3>Nearby Spots</h3>
       <div id="container">
           <div id="left"><Card></Card></div>
           <div id="middle"><Card></Card></div>
           <div id="right"><Card></Card></div>
       </div>
       <h3>Nearby Friends</h3>
       <div id="container">
           <div id="left"><Card></Card></div>
           <div id="middle"><Card></Card></div>
           <div id="right"><Card></Card></div>
       </div>
       </div>
    );
};

export default Home
