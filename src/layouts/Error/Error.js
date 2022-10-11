import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='position-relative py-5 mx-auto'>
            <h1>Page not found</h1>
            <Button as={Link} to='/'>Back to Home</Button>
        </div>
    );
};

export default Error;