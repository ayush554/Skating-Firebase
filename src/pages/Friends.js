
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useHistory } from "react-router-dom";



export const Friends = () => {

        const [data, setData] = useState({
          name: "",
          gender: "",
          email: "",
          password: "",
          experience: "",
          skatingtype: "",
          social: "",
          frequency: "",
          phone: "",
          state: "",
          city: "",
          error: null,
          loading: false,
        });
    const { name, age, gender, email, password, experience,skatingtype,social,frequency,phone, state, city,error, loading } = data;
    const Gender=['Male', 'Female', 'X'];
    const Experience = ['Beginner', 'Intermediate', 'Expert'];
    const Parktype = ['GrPublicoup', 'Private'];
    const Skating_Type = [
        'Freestyle',
        'Vert',
        'Street',
        'Park',
        'Cruising',
        'Downhill',
        'Others',
    ];



return (
    <section>
      <h3>Find Friends</h3>
     
        
        <div className="input_container">
          <label htmlFor="name">Age</label>
          <input type="number" name="age" value={age} />
        </div>



        <div className="input_container">
          <label htmlFor="city">Location*</label>
          <input type="text" name="city" value={city} 
        //   onChange={handleChange} 
          />
        </div>

        <div className="input_container">
                <label htmlFor="parktype">Gender</label>          
                <select
                    name="gender"
                    required
                    value={gender}
                    // onChange={handleChange}
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
                    required
                    value={skatingtype}
                    // onChange={handleChange}
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
                    required
                    value={Experience}
                    // onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Experience.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div className="btn_container">
          <button className="btn" disabled={loading}>
            {loading ? "Creating ..." : "Submit"}
          </button>
        </div>

            </section>

);



};

export default Friends
