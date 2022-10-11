import React from 'react';


const Options = ({ options }) => {
    console.log(options);
    return (
        <div className='border p-4 col-4 m-3'>
            <div className="form-check text-start">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    {options}
                </label>
            </div>
        </div>
    );
};

export default Options;