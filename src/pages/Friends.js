import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc, Timestamp,addDoc,collection } from "firebase/firestore";
import { useHistory } from "react-router-dom";



export const Friends = () => {
    const history = useHistory();
        const [data, setData] = useState({
          age: "",
          gender: "",
          experience: "",
          skatingtype: "",
          city: "",
          error: null,
          loading: false,
        });
    const { age, gender, skatingtype,city,experience, error, loading } = data;
    const Gender=['Male', 'Female', 'X'];
    const Experience = ['Beginner', 'Intermediate', 'Expert'];
    const Skating_Type = [
        'Freestyle',
        'Vert',
        'Street',
        'Park',
        'Cruising',
        'Downhill',
        'Others',
    ];
    const Cityselect=['Dallas','Plano','Fort Worth','Arlington','Richardson','Frisco','Grapevile','Wylie','White Settlement','Grabd Prairie','McKinney'];
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true });
        if ( !experience || skatingtype )  {
          setData({ ...data, error: "All fields are required" });
        }
       try {
          
          await setDoc(doc(db, "FriendSearch",auth.currentUser.uid), {
            age,
            gender,
            skatingtype,
            experience,
            city,
            createdAt: Timestamp.fromDate(new Date()),
            isOnline: true,
          });
          setData({
            age: "",
            gender: "",
            experience: "",
            skatingtype: "",
            city: "",
            error: null,
            loading: false,
          });
          history.replace("/FriendsSearch");
        } catch (err) {
          setData({ ...data, error: err.message, loading: false });
        }
      };

return (
    <section>
      <h3>Find Friends</h3>
      <form className="form" onSubmit={handleSubmit}>
        
        <div className="input_container">
          <label htmlFor="name">Age</label>
          <input type="number" name="age" value={age} onChange={handleChange}  />
        </div>



        <div className="input_container">
                <label htmlFor="city">City</label>          
                <select
                    name="city"
                    required
                    value={city}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Cityselect.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

        <div className="input_container">
                <label htmlFor="parktype">Gender</label>          
                <select
                    name="gender"
                    
                    value={gender}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Gender.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div className="input_container">
                <label htmlFor="skatingtype">Type of Skating</label>          
                <select
                    name="skatingtype"
                    
                    value={skatingtype}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Skating_Type.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

  

            <div className="input_container">
                <label htmlFor="experience">Experience</label>          
                <select
                    name="experience"
                    
                    value={experience}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Experience.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>


            {error ? <p className="error">{error}</p> : null}
        <div className="btn_container">
          <button className="btn" disabled={loading}>
            {loading ? "Creating ..." : "Submit"}
          </button>
        </div>
        </form>
            </section>

);



};

export default Friends
