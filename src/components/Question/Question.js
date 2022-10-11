import React from 'react';
import Options from '../Options/Options';

const Question = ({ question }) => {
    console.log(question);
    return (
        <div className='container'>
            <div className='border p-5'>
                <h3>Quiz :{question.question.replace(/(<([^>]+)>)/ig, "")}</h3>

            </div>
            <div className='row'>
                {
                    question.options.map((option, index) => <Options
                        key={index}
                        options={option}
                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Question;