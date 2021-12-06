import Img from "../image1.jpg";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { collection, query, where, getDocs, doc,getDoc } from "firebase/firestore";

export const View_park = () => {
    const [Park, setPark] = useState();
    const [parkid, setParkid] = useState();
    let id="";
    useEffect(() => {

        const currentuserdetails = query(collection(db, 'ViewDetails'), where("type","==","Parks"));
        getDocs(currentuserdetails).then((snap) =>
    {   
        
        // setParkid(snap.docs[0].data().uid);
        // console.log(snap.docs[0].data().uid);
        id=snap.docs[0].data().uid;
        const parks= doc(db,'Parks',id)
        getDoc(parks).then((doc)=>
        {
            setPark(doc.data())
        });
       
       
    });

    


    },[]);
    
    return Park ? (
        <section>
      <div className="profile_container">
      <div className="img_container">
          <img src={Park.Imagelink || Img} alt="avatar" />
       
        </div>
        <div className="text_container">
          <h3>{Park.Name}</h3>
          <p>Address: {Park.Address}</p>
          <p>City: {Park.City}</p>
          <p>Description: {Park.Description}</p>
          <p>Park Type: {Park.Parktype}</p>
          <p>Experience: {Park.Experience}</p>
          <p>Timings: {Park.Timings}</p>
        </div>
      </div>
    </section>
    ) : null;
}
export default View_park;