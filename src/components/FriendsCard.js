import React from 'react'
import Img from "../image1.jpg";
export const FriendsCard = ({ imgsrc, title, joined_date ,Address,Age, Gender, Skating_Type}) => {
    return (
         <div className="Card">
      <div className="profile_container">
        <div className="img_container">
          <img src={imgsrc || Img} alt="avatar" />
       
        </div>
        <div className="textt_container">
          <h3>{title}</h3>
          <p>Age: {Age}</p>
          <p>Gender: {Gender}</p>
          <p>Address: {Address}</p>
          <p>Skating Type: {Skating_Type}</p>
          <small>Joined on: {joined_date}</small>
          <p></p>
          <button className="btn" > View Details </button>
        </div>
        
      </div>
    </div>
    );
};
export default FriendsCard;
