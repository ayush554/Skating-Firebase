import React from 'react';
import '../css/friend-card-style.css';

const FriendsCard = ({ imgsrc, title, experience, Age, TOS }) => {
    return (
        <div className="card text-center shadow mb-4">
            <div className="overflow-hidden">
                <img
                    src={imgsrc}
                    alt="Image 1"
                    className="card-img-top friend-img"
                />
            </div>
            <div className="card-body text-dark friend-body">
                <h4 className="card-title">{title}</h4>
                <h5 className="card-text text-secondary friend">
                    {experience}
                </h5>
                <h5 className="card-text text-secondary friend">{Age}</h5>
                <h5 className="card-text text-secondary friend">{TOS}</h5>
                <a href="#" className="btn btn-outline-success">
                    Details
                </a>
            </div>
        </div>
    );
};
export default FriendsCard;
