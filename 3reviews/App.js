import React, {useState} from 'react';
import data from "./data.js";
import Card from './Card';

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function showNext() {
        //this condition is written for >= instead of === because randomIndex in showRandom()
        //can be greater than data.length - 1. though the probability that Math.Random() would
        //be the last whole number is very rear.
        if(currentIndex >= data.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function showPrevious() {
        if(currentIndex === 0) {
            setCurrentIndex(data.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    function showRandom() {
        // I purposely added the number that multiplies the Math.random() value because I observed
        // that the Math.random() value is rearly at the last figure and we are doing Math.floor()
        // for the entire value.
        const randomIndex = Math.floor(Math.random() * Math.floor(4));

        if(randomIndex === currentIndex) {
            showNext();
        } else {
            setCurrentIndex(randomIndex);
        }
    }

    return (
        <div className="app">
            <h1 className="review-header">Our Reviews</h1>
            <Card 
              person={data[currentIndex]} 
              showNext={() => showNext()} 
              showPrevious={() => showPrevious()}
              showRandom={() => showRandom()}/>
        </div>
    )
}