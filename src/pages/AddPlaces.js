
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc, Timestamp,addDoc,collection } from "firebase/firestore";
import { useHistory } from "react-router-dom";



export const AddPlaces = () => {
    const history = useHistory();
        const [data, setData] = useState({
          Name: "",
          Timings: "",
          Address: "",
          Description: "",
          Parktype: "",
          City: "",
          Addtype: "",
          error: null,
          loading: false,
        });
    const { Name,  Description, Address, Parktype, Addtype, Timings, City,error, loading } = data;
    const Experiencelvl = ['Beginner', 'Intermediate', 'Expert'];
    const Parktypelvl = ['Public', 'Private'];
    const AddTypelvl=['Parks','Spots'];
    const Cityselect=['Dallas','Plano','Fort Worth','Arlington','Richardson','Frisco','Grapevile','Wylie','White Settlement','Grabd Prairie','McKinney'];



    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true });
        if (  !Parktype ||!Addtype)  {
          setData({ ...data, error: "All fields are required" });
        }
       try {
          var newid=Date.now().toString(36) + Math.random().toString(36).substr(2)
          await setDoc(doc(db, Addtype,newid), {
            Name,
            Parktype,
            Addtype,
            Address,
            Description,
            Timings,
            City,
            createdAt: Timestamp.fromDate(new Date()),
          
          });
          setData({
            Name: "",
            Timings: "",
            Address: "",
            Skatingtype: "",
            Description: "",
            Addtype: "",
            City: "",
            error: null,
            loading: false,
          });
          history.replace("/");
        } catch (err) {
          setData({ ...data, error: err.message, loading: false });
        }
      };

return (
    <section>
      <h3>Add Places</h3>
      <form className="form" onSubmit={handleSubmit}>
        
        <div className="input_container">
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" value={Name} onChange={handleChange}/>
        </div>



        {/* <div className="input_container">
          <label htmlFor="City">Location*</label>
          <input type="text" name="City" value={City} onChange={handleChange}
          />
        </div> */}

        <div className="input_container">
          <label htmlFor="Address">Address</label>
          <input type="text" name="Address" value={Address} onChange={handleChange}
          />
        </div>


        <div className="input_container">
          <label htmlFor="Description">Description</label>
          <input type="text" name="Description" value={Description} onChange={handleChange}
          />
        </div>

        <div className="input_container">
          <label htmlFor="Timings">Timings</label>
          <input type="text" name="Timings" value={Timings} placeholder="10:00AM-11:00PM" onChange={handleChange}
          />
        </div>

        <div className="input_container">
                <label htmlFor="City">Location</label>          
                <select
                    name="City"
                    required
                    value={City}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Cityselect.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>


        <div className="input_container">
                <label htmlFor="Addtype">AddType</label>          
                <select
                    name="Addtype"
                    required
                    value={Addtype}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {AddTypelvl.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>


        <div className="input_container">
                <label htmlFor="Parktype">AccessType</label>          
                <select
                    name="Parktype"
                    required
                    value={Parktype}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Parktypelvl.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>
  

            {/* <div className="input_container">
                <label htmlFor="experience">Experience</label>          
                <select
                    name="experience"
                    required
                    value={experience}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Experience.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div> */}


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

export default AddPlaces
