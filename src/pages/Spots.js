
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useHistory } from "react-router-dom";



export const Spots = () => {

        const [data, setData] = useState({
          name: "",
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
    const { name, email, password, experience,skatingtype,social,frequency,phone, state, city,error, loading } = data;
    const Experience = ['Beginner', 'Intermediate', 'Expert'];
    const Parktype = ['GrPublicoup', 'Private'];
    



return (
    <section>
      <h3>Find Spots</h3>
     
        
        <div className="input_container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} />
        </div>



        <div className="input_container">
          <label htmlFor="city">Location*</label>
          <input type="text" name="city" value={city} 
        //   onChange={handleChange} 
          />
        </div>




        <div className="input_container">
                <label htmlFor="parktype">Parktype</label>          
                <select
                    name="parktype"
                    required
                    value={Parktype}
                    // onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Parktype.map((c) => (
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

export default Spots
