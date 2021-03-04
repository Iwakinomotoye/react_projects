import React, {useState} from 'react';

export default function Tour({tour, onClick}) {
    const [showMore, setShowMore] = useState(false);

    const {id, name, image, info, price} = tour;

    return (
        <article className="tour">
            <img src={image} alt={name} />
            <div className="tour-name">
                <h1>{name}</h1>
                <p>${price}</p>
            </div>
            <div className="tour-description">
                {showMore? info : `${info.substring(0, 200)}...`}
                <button 
                  className="show-more-btn" 
                  onClick={() => setShowMore(!showMore)}
                >{showMore? "Show Less" : "Show More"}</button>
            </div>
            <button className="not-interested" onClick={() => {onClick(id)}}>Not Interested</button>
        </article>
    )
}