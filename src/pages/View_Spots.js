import Img from "../image1.jpg";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { collection, query, where, getDocs, doc,getDoc } from "firebase/firestore";

export const View_Spots = () => {
    const [Spots, setSpot] = useState();
    let id="";
    useEffect(() => {

        const currentuserdetails = query(collection(db, 'ViewDetails'), where("type","==","Spots"));
        getDocs(currentuserdetails).then((snap) =>
    {   
        
        // setParkid(snap.docs[0].data().uid);
        // console.log(snap.docs[0].data().uid);
        id=snap.docs[0].data().uid;
        const parks= doc(db,'Spots',id)
        getDoc(parks).then((doc)=>
        {
            console.log(doc.data());
            setSpot(doc.data())
        });
       
       
    });

    


    },[]);
    
    return Spots ? (
        <section>
      <div className="profile_container">
      <div className="img_container">
          <img src={Spots.Imagelink || Img} alt="avatar" />
       
        </div>
        <div className="text_container">
          <h3>{Spots.Name}</h3>
          <p>Address: {Spots.Address}</p>
          <p>City: {Spots.City}</p>
          <p>Description: {Spots.Description}</p>
          <p>Experience: {Spots.Experience}</p>
          <p>Spot Type: {Spots.Parktype}</p>
        </div>
      </div>
    </section>
    ) : null;
}
export default View_Spots;
