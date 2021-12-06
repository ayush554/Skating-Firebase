
import React, { useState, useEffect } from "react";
import { storage, db, auth } from "../firebase";
import FriendsCard from '../components/FriendsCard';
import SpotsCard from '../components/SpotsCard';
import { collection, query, where, getDocs, doc , getDoc } from "firebase/firestore";
import Friends from "./Friends";


export const FriendsSearch = () => {

    const [Friend, setFriend] = useState([]);
    let div_id=["left","middle","right"];
    let conditions;
    let global_friends=[];
    let friend_id=[];
    // let Friends = [];
    useEffect(() => {
        
        const friendssearch= doc(db,'FriendSearch',auth.currentUser.uid)
        
    getDoc(friendssearch).then((snap) =>
{   
    // console.log(snap.data());
    conditions=snap.data();
    const q1 = query(collection(db, "users"), where("age", "==", conditions.age));
    getDocs(q1).then((snap) =>
    {
        let friends = []
        snap.docs.forEach((doc)=>
        {
            if (doc.id==auth.currentUser.uid)
            {
                return;
            }
            friends.push({...doc.data(),id:doc.id})
        })
        // console.log(friends);
        for (let i = 0; i < friends.length; i++) {
            global_friends.push(friends[i]);
        }
   
    }).catch(err =>
        {
            console.log(err.message);
        })

     const q2 = query(collection(db, "users"), where("city", "==", conditions.city));
    getDocs(q2).then((snap) =>
    {
        let friends = []
        snap.docs.forEach((doc)=>
        {
            if (doc.id==auth.currentUser.uid)
            {
                return;
            }
            friends.push({...doc.data(),id:doc.id})
        })
        for (let i = 0; i < friends.length; i++) {
            global_friends.push(friends[i]);
        }
       
        
    }).catch(err =>
        {
            console.log(err.message);
        });
       
   
    const q3 = query(collection(db, "users"), where("gender", "==", conditions.gender));
    getDocs(q3).then((snap) =>
    {
        
        let friends = []
        snap.docs.forEach((doc)=>
        {
            if (doc.id==auth.currentUser.uid)
            {
                return;
            }
            friends.push({...doc.data(),id:doc.id})
        })
        for (let i = 0; i < friends.length; i++) {
            global_friends.push(friends[i]);
        }
       
       
    }).catch(err =>
        {
            console.log(err.message);
        });
    
    const q4 = query(collection(db, "users"), where("skatingtype", "==", conditions.skatingtype));
    getDocs(q4).then((snap) =>
    {
        
        let friends = []
        snap.docs.forEach((doc)=>
        {
            if (doc.id==auth.currentUser.uid)
            {
                return;
            }
            friends.push({...doc.data(),id:doc.id})
        })
        for (let i = 0; i < friends.length; i++) {
            global_friends.push(friends[i]);
        }
       
       
    }).catch(err =>
        {
            console.log(err.message);
        });
    const q5 = query(collection(db, "users"), where("experience", "==", conditions.experience));
    getDocs(q5).then((snap) =>
    {
        
        let friends = []
        snap.docs.forEach((doc)=>
        {
            if (doc.id==auth.currentUser.uid)
            {
                return;
            }
            friends.push({...doc.data(),id:doc.id})
        })
        for (let i = 0; i < friends.length; i++) {
            global_friends.push(friends[i]);
        }
        
        const filteredArr = global_friends.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
        for (let i = 0; i < filteredArr.length; i++) {
            if (i<3)
            {
                friend_id[i]=<div id={div_id[i]}><FriendsCard
                imgsrc={filteredArr[i].avatar}
                title={filteredArr[i].name}
                Address={filteredArr[i].city} 
                Age={filteredArr[i].age}
                Gender={filteredArr[i].gender}
                Skating_Type={filteredArr[i].skatingtype}
                experience={filteredArr[i].experience}
                uid={filteredArr[i].id}
                /></div>
            }
            else{
                friend_id[i]=<div id={div_id[i%3]}><FriendsCard
                imgsrc={filteredArr[i].avatar}
                title={filteredArr[i].name}
                Address={filteredArr[i].city} 
                Age={filteredArr[i].age}
                Gender={filteredArr[i].gender}
                Skating_Type={filteredArr[i].skatingtype}
                experience={filteredArr[i].experience}
                uid={filteredArr[i].id}
                /></div>
            }
          }
          setFriend(friend_id);
       
    }).catch(err =>
        {
            console.log(err.message);
        });
 
      

});
// console.log(Friends);
// const Friendssearch = [...new Set(Friends)];

// let results = [];
// results= Friends
// console.log(results);






    },[]);
    // console.log(Friend);
    return Friend ? (
        <div>
           <h3>Search Results</h3> 
           <div>
           <div id="container">
        {Friend.map(park => (
           <em>
           {park}
           </em>

            ))}
            </div>
            </div>
           
        
        
       </div>
    ): null ;
}
