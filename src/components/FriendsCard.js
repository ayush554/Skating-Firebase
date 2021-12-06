import React, { useState} from "react";
import Img from "../image1.jpg";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { setDoc, doc, Timestamp,addDoc,collection } from "firebase/firestore";
export const FriendsCard = ({ imgsrc, title, experience ,Address,Age, Gender, Skating_Type,uid}) => {

    const history= useHistory();
    const [data, setData] = useState({
      uid: "",
      type: "Friends",
    });
    const { type } = data;
    const handleClick = async (e) => {
      e.preventDefault();
      setData({ ...data, error: null, loading: true });
      
     try {
        
        await setDoc(doc(db, "ViewDetails",auth.currentUser.uid), {
          uid,
          type
        });
        setData({
          uid: "",
          type: "Friends",
          
        });
        history.replace("/View_Friends");
      } catch (err) {
        setData({ ...data, error: err.message, loading: false });
      }
    };
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
          <p>Experience: {experience}</p>
          <p></p>
          <button className="btn" onClick={handleClick}> View Details </button>
        </div>
        
      </div>
    </div>
    );
};
export default FriendsCard;
