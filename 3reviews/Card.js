import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Card({person, showNext, showPrevious, showRandom}) {
    const {name, job, image, text} = person;
    return (
        <div className="card">
            <div className="img-container">
                <span className="quote"> <FaQuoteRight /> </span>
                <img src={image} alt={name}/>
                <span className="img-bg"></span>
            </div>
            <h3 className="person-name">{name}</h3>
            <p className="person-job">{job}</p>
            <p className="description">{text}</p>
            <div>
                <button className="prev-btn" onClick={() => showPrevious()}> <FaChevronLeft /> </button>
                <button className="next-btn" onClick={() => showNext()}> <FaChevronRight /></button>
            </div>
            <button className="surprise-me" onClick={() => showRandom()}>Surprise Me</button>
        </div>
    )
}