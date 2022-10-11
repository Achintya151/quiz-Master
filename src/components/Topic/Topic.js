import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <Card style={{ width: '18rem', margin: '2rem 0' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Total Question: {total}
                </Card.Text>
                <Button as={Link} to={`/quiz/${id}`} variant="success">Start Practice</Button>
            </Card.Body>
        </Card>

    );
};

export default Topic;