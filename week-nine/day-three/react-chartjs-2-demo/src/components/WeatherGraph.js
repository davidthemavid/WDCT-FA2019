import React from 'react';
import { Bar } from 'react-chartjs-2';

export default props => (
    <div className="chart">
        <h1>{props.title}</h1>
        <Bar data={props.data} />
    </div>
)