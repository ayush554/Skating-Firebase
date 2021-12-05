import React from 'react';
import { useHistory, useLocation } from 'react-router';
import db, { firebasestorage } from '../../firebase';
import { useContext } from 'react';
import { AuthContext } from '../../store/Context';
import '../css/card-style.css';

const ParkCard = ({ imgsrc, title, description }) => {
    return (
        <div className="card text-center shadow mb-4">
            <div className="overflow-hidden">
                <img src={imgsrc} alt="Image 1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{description}</p>
                <a href="#" className="btn btn-outline-success">
                    Details
                </a>
            </div>
        </div>
    );
};
export default ParkCard;
