import Img from "../image1.jpg";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { collection, query, where, getDocs, doc,getDoc } from "firebase/firestore";

export const View_Friends = () => {
    const [Friend, setSpot] = useState();
    let id="";
    useEffect(() => {

        const currentuserdetails = query(collection(db, 'ViewDetails'), where("type","==","Friends"));
        getDocs(currentuserdetails).then((snap) =>
    {   
        
        // setParkid(snap.docs[0].data().uid);
        // console.log(snap.docs[0].data().uid);
        id=snap.docs[0].data().uid;
        console.log(id);
        const parks= doc(db,'users',id)
        getDoc(parks).then((doc)=>
        {
            console.log(doc.data());
            setSpot(doc.data())
        });
       
       
    });

    


    },[]);
    
    return Friend ? (
        <section>
      <div className="profile_container">
      <div className="img_container">
          <img src={Friend.avatar || Img} alt="avatar" />
       
        </div>
        <div className="text_container">
        <h3>{Friend.name}</h3>
          <p>Email: {Friend.email}</p>
          <p>Experience: {Friend.experience}</p>
          <p>Skating type: {Friend.skatingtype}</p>
          <p>Gender: {Friend.gender}</p>
          <p>City: {Friend.city}</p>
          <p>Phone: {Friend.phone}</p>
          <p>Age: {Friend.age}</p>

          <small>Joined on: {Friend.createdAt.toDate().toDateString()}</small>
        </div>
      </div>
    </section>
    ) : null;
}
export default View_Friends;