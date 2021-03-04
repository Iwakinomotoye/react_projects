import React, {useState} from 'react';
import {BsPlus, BsDash} from 'react-icons/bs';


export default function Question ({question}) {
    const {id, title, details} = question;
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div key={id} className="question">
            <div className="title">
                <h3>{title}</h3>
                <button className="show-details-btn" onClick={() => setShowDetails(!showDetails)}>{showDetails ? <BsDash /> : <BsPlus /> }</button>
            </div>
            {showDetails && <p className="details">{details}</p>}
        </div>
    )
}