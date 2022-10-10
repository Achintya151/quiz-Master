import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import banner from '../../images/banner.jpg'

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-md-around my-5 align-items-md-center'>
                <img className='w-25 mb-3' src={banner} alt="banner" />
                <div className='w-50'>
                    <h1>Welcome To Quiz Master</h1>
                    <p className='text-wrap text-center'>This is Quiz Master website. It is a collection of questions based on four different topic of programming. Test your knowledge of programming.</p>
                </div>
            </div>
            <div className='d-flex flex-wrap flex-lg-row justify-content-lg-evenly justify-content-around'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;