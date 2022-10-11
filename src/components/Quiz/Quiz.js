import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizes = useLoaderData();
    return (
        <div>
            <h1>Quiz of {quizes.data.name}</h1>
            <br />
            {
                quizes.data.questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;