import React from 'react'
import Img from "../image1.jpg";
export const Card = () => {
    return (
         <div className="Card">
      <div className="profile_container">
        <div className="img_container">
          <img src={Img || Img} alt="avatar" />
       
        </div>
        <div className="text_container">
          <h3>Name</h3>
          <p>Email</p>
          <small>Joined on: Today</small>
          <p></p>
          <button className="btn" > View Details </button>
        </div>
        
      </div>
    </div>
    );
};
export default Card;
