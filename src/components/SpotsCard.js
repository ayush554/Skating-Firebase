import React, { useState} from "react";
import Img from "../image1.jpg";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { setDoc, doc, Timestamp,addDoc,collection } from "firebase/firestore";
export const SpotsCard = ({ imgsrc, title ,Address,uid,Experience,spottype}) => {
    const history= useHistory();
  const [data, setData] = useState({
    uid: "",
    type: "Spots",
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
        type: "Spots",
        
      });
      history.replace("/View_Spots");
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
          <p>Address: {Address}</p>
          <p>Experience: {Experience}</p>
          <p>Spot Type: {spottype}</p>
          <p></p>
          <button className="btn" onClick={handleClick}> View Details </button>
        </div>
        
      </div>
    </div>
    );
};
export default SpotsCard;
