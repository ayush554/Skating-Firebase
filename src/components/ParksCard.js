import React from 'react'
import Img from "../image1.jpg";
export const ParksCard = ({ imgsrc, title,Address,timings}) => {
    return (
         <div className="Card">
      <div className="profile_container">
        <div className="img_container">
          <img src={imgsrc || Img} alt="avatar" />
       
        </div>
        <div className="textt_container">
          <h3>{title}</h3>
          <p>Address: {Address}</p>
          <p>Timings: {timings}</p>
          <p></p>
          <button className="btn" > View Details </button>
        </div>
        
      </div>
    </div>
    );
};
export default ParksCard;
