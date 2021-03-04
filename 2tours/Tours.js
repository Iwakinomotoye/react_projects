import React from 'react';
import Tour from './Tour';

function Tours({tours, removeTour}) {
    return (
        <div className="tours">
            <h1 className="tours-header">Tours</h1>
            {
                tours.map(tour => {
                    return <Tour tour={tour} onClick={(id) => removeTour(id)} key={tour.id}/>
                })
            }
        </div>
    )
}

export default Tours;