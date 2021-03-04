import React from 'react';
import Question from './Question';


const Questions = ({questions}) => {

    return (
        <div>
            {questions.map(question => {

                return <Question question={question} />
            })}
        </div>
    )
}

export default Questions;