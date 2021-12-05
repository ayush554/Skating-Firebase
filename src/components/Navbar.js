import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../context/auth";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history.replace("/login");
  };
  return (
    <nav>
      <h3>
        <Link to="/">Skating App</Link>
      </h3>
      <div>
        {auth.currentUser ? (
          <>
             <Link to="/Friends">Friends</Link>
            <Link to="/Parks">Parks</Link>
            <Link to="/Spots">Spots</Link>
            <Link to="/profile">Profile</Link>
           
            <button className="btn" onClick={handleSignout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Sign-Up</Link>
            <Link to="/login">Login</Link>
            
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;