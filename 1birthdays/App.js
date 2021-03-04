import React, {useState} from 'react';
import data from './data.js';
import List from './List.js';

function App() {
    const [people, setPeople] = useState(data);

    const handleClick = (id) => {
        const newPeople = people.filter(person => person.id !== id);
        setPeople(newPeople);
    }

    return (
        <div className="app">
            <List people={people} onClick={(id)=>{handleClick(id)}}></List>
        </div>
    )
}

export default App;