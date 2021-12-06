
import React, { useState, useEffect } from "react";
import { storage, db, auth } from "../firebase";
import ParksCard from '../components/ParksCard';
import SpotsCard from '../components/SpotsCard';
import { collection, query, where, getDocs } from "firebase/firestore";



export const Home = () => {
    const [Park, setPark] = useState([]);
    const [Spot, setSpot] = useState([]);
    const [User, setUser] = useState();
    let div_id=["left","middle","right"];
    let park_id=[];
    let spots_id=[];
    
    useEffect(() => {

    const currentuserdetails = query(collection(db, 'users'), where("uid","==",auth.currentUser.uid));
    getDocs(currentuserdetails).then((snap) =>
{   
    // let user=snap.data();
    setUser(snap.docs[0].data());
    
    const q = query(collection(db, "Parks"), where("City", "==", User.city));
    
getDocs(q).then((snap) =>
{
    let parks = []
    snap.docs.forEach((doc)=>
    {
        
        parks.push({...doc.data(),id:doc.id})
        // console.log(parks[0].id);
    })
    for (let i = 0; i < parks.length; i++) {
        if (i<3)
        {
            park_id[i]=<div id={div_id[i]}><ParksCard
            imgsrc={parks[i].Imagelink}
            title={parks[i].Name}
            Address={parks[i].Address} 
            timings={parks[i].Timings}
            Experience={parks[i].Experience}
            uid={parks[i].id}
            /></div>
        }
        else{
            park_id[i]=<div id={div_id[i%3]}><ParksCard
            imgsrc={parks[i].Imagelink}
            title={parks[i].Name}
            Address={parks[i].Address} 
            timings={parks[i].Timings}
            Experience={parks[i].Experience}
            uid={parks[i].id}
            /></div>
        }
      }
      
    // console.log(park_id);
    setPark(park_id);
}).catch(err =>
    {
        console.log(err.message);
    })


///
const qspots = query(collection(db, "Spots"), where("City", "==", User.city));

getDocs(qspots).then((snap) =>
{
    let spots = []
    snap.docs.forEach((doc)=>
    {
        spots.push({...doc.data(),id:doc.id})
    })
    for (let i = 0; i < spots.length; i++) {
        if (i<3)
        {
            spots_id[i]=<div id={div_id[i]}><SpotsCard
            imgsrc={spots[i].Imagelink}
            title={spots[i].Name}
            Address={spots[i].Address} 
            Experience={spots[i].Experience}
            spottype={spots[i].Parktype}
            uid={spots[i].id}
            /></div>
        }
        else{
            spots_id[i]=<div id={div_id[i%3]}><SpotsCard
            imgsrc={spots[i].Imagelink}
            title={spots[i].Name}
            Address={spots[i].Address} 
            Experience={spots[i].Experience}
            spottype={spots[i].Parktype}
            uid={spots[i].id}
            /></div>
        }
      }
      
   
    setSpot(spots_id);
}).catch(err =>
    {
        console.log(err.message);
    })
///




    
}).catch(err =>
    {
        console.log(err.message);
    })
     
   


// console.log(Park);
// querySnapshot.forEach((doc) => {
//   setUser(doc.data());
//   parks.push(doc.before.val());
//   console.log(parks);





    },[User]);
    return [Park,Spot] ? (
        
        <div>
           <h3>Nearby Parks</h3> 
           <div id="container">
        {Park.map(park => (
           <em>
           {park}
           </em>

            ))}
            </div>
           
        
        
       <h3>Nearby Spots</h3>
       <div id="container">
       {Spot.map(spot => (
           <em>
           {spot}
           </em>

            ))}
       </div>
       
       {/* <h3>Nearby Friends</h3>
       <div id="container">
           <div id="left"><SpotsCard></SpotsCard></div>
           <div id="middle"><SpotsCard></SpotsCard></div>
           <div id="right"><SpotsCard></SpotsCard></div>
       </div> */}
       </div>
    ):null ;
};

export default Home
