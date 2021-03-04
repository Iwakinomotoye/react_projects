import React from 'react';

const List = (props) => {
    const people = props.people;
    return (
        <>
            {
                people.map(person => {
                    const {id, name, image, age} = person;

                    return (
                        <article key={id}>
                            <img src={image} alt={name}/>
                            <div>
                                <h1>{name}</h1>
                                <p>{age} years</p>
                            </div>
                            <button className="delete" onClick={()=> {props.onClick(id)}}>Delete</button>
                        </article>
                    )
                })
            }
        </>
    )
}

export default List;