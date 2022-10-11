import React from 'react';


const Options = ({ options, handleAnswer }) => {
    return (
        <div className='border border-success rounded container p-4 col-12 col-md-5 my-2 mx-auto'>
            <div className="form-check text-success text-start">
                <input onClick={() => handleAnswer(options)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    {options}
                </label>
            </div>
        </div>
    );
};

export default Options;