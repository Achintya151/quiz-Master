import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Options from '../Options/Options';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

const Question = ({ question }) => {
    console.log(question);
    const [show, setShow] = useState(false);
    return (
        <div className='container'>
            <div className='shadow bg-body rounded my-5 p-5'>
                <div className='p-5 text-success position-relative'>
                    <div className='position-absolute bottom-0 end-0'>
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Correct Answer:</strong>
                            </Toast.Header>
                            <Toast.Body>{question.correctAnswer}</Toast.Body>
                        </Toast>
                    </div>

                    <div className='position-absolute top-0 end-0'>
                        <Button onClick={() => setShow(true)} variant="light">
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        </Button>
                    </div>


                    <h4>Quiz: {question.question.replace(/(<([^>]+)>)/ig, "")}</h4>
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
        </div>
    );
};

export default Question;