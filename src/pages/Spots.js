
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc, Timestamp,addDoc,collection } from "firebase/firestore";
import { useHistory } from "react-router-dom";



export const Spots = () => {
    const history = useHistory();
        const [data, setData] = useState({
          name: "",
          experience: "",
          parktype: "",
          frequency: "",
          city: "",
          error: null,
          loading: false,
        });
    const { name,  parktype, experience, city,error, loading } = data;
    const Experience = ['Beginner', 'Intermediate', 'Expert'];
    const Parktype = ['Public', 'Private'];
    const Cityselect=['Dallas','Plano','Fort Worth','Arlington','Richardson','Frisco','Grapevile','Wylie','White Settlement','Grabd Prairie','McKinney'];

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true });
        if ( !experience || !parktype )  {
          setData({ ...data, error: "All fields are required" });
        }
       try {
          
          await setDoc(doc(db, "SpotSearch",auth.currentUser.uid), {
            name,
            parktype,
            experience,
            city,
            createdAt: Timestamp.fromDate(new Date()),
            
          });
          setData({
            name: "",
            experience: "",
            skatingtype: "",
            city: "",
            error: null,
            loading: false,
          });
          history.replace("/SpotsSearch");
        } catch (err) {
          setData({ ...data, error: err.message, loading: false });
        }
      };

return (
    <section>
      <h3>Find Spots</h3>
      <form className="form" onSubmit={handleSubmit}>
        
        <div className="input_container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange}/>
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
                <label htmlFor="parktype">SpotType</label>          
                <select
                    name="parktype"
                    
                    value={parktype}
                    onChange={handleChange}
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

export default Spots;
