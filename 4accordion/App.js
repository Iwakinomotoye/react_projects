import React from 'react';
import data from './data';
import Questions from './Questions';


export default function App() {
    return (
        <div className="app">
            <h2>Questions And Answers About Login</h2>
            <Questions questions={data} />
        </div>
    )
}