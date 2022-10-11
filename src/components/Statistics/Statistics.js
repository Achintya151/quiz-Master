import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    return (
        <section className='container'>
            <div>
                <h1>Total Questions in Topic</h1>
                <br />
            </div>
            <div>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart
                        width={600}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="total" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </section>
    );
};

export default Statistics;