import React, { useState, useEffect } from 'react';
import getTours from './getTours';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
    const [tours, setTours] = useState(null);
    let result = null;

    useEffect(() => {
        if(!tours) {
            refresh();
        }
    })

    async function refresh() {
        setTours(null);

        const data = await getTours(url);
        setTours(data);
    }

    function removeTour(id) {
        const remainingTours = tours.filter(tour => tour.id !== id);
        setTours(remainingTours);
    }

    if (!tours) {
        result = <Loading />
    } else {
        if(tours.length > 0) {
            result = <Tours tours={tours} removeTour={(id)=>removeTour(id)}/>
        } else {
            result = (
                <>
                    <h1 className="tours-header">No Tours Left</h1>
                    <button className="refresh" onClick={()=>refresh()}>Refresh</button>
                </>
            )
        }
    }

    return (
        <div className="app">{result}</div>
    )
}

export default App;