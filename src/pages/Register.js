import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useHistory } from "react-router-dom";

const Register = () => {
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

  const history = useHistory();

  const Freq = ['Once', 'Twice', 'Thrice', 'Every Day'];
  const Social = ['Group', 'Alone', 'Both'];
  const Experience = ['Beginner', 'Intermediate', 'Expert'];
  const { name, email, password, experience,skatingtype,social,frequency,phone, state, city,error, loading } = data;
  const Skating_Type = [
    'Freestyle',
    'Vert',
    'Street',
    'Park',
    'Cruising',
    'Downhill',
    'Others',
];
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password || !experience || !social || !frequency)  {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        experience,
        skatingtype,
        social,
        frequency,
        phone,
        state,
        city,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
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
      history.replace("/");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  return (
    <section>
      <h3>Create An Account</h3>
      <form className="form" onSubmit={handleSubmit}>
        
        <div className="input_container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>

        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />

        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>


         


              <div className="input_container">
                <label htmlFor="phone">Phone Number</label> 
                <input
                    name="phone"
                    type="tel"
                    placeholder="123-456-7890"
                    value={phone}
                    onChange={handleChange}
                />
            </div>

            <div className="input_container">
          <label htmlFor="state">State</label>
          <input type="text" name="state" value={state} onChange={handleChange} />
        </div>

        <div className="input_container">
          <label htmlFor="city">City</label>
          <input type="text" name="city" value={city} onChange={handleChange} />
        </div>




        <div className="input_container">
                <label htmlFor="experience">Experience*</label>          
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
            </div>
  

            <div className="input_container">
                <label htmlFor="skatingtype">Type of Skating</label>          
                <select
                    name="skatingtype"
                    required
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
                <label htmlFor="social">Social*</label>          
                <select
                    name="social"
                    required
                    value={social}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Social.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div className="input_container">
                <label htmlFor="frequency">Frequency per week*</label>          
                <select
                    name="frequency"
                    required
                    value={frequency}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {Freq.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            {error ? <p className="error">{error}</p> : null}
        <div className="btn_container">
          <button className="btn" disabled={loading}>
            {loading ? "Creating ..." : "Register"}
          </button>
        </div>

      </form>
    </section>
  );
};

export default Register;