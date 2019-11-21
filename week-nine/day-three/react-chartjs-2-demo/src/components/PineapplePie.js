import React from 'react';
import { Pie } from 'react-chartjs-2';

export default ({title, ...props}) => (
    <div className="chart">
        <h1>{title}</h1>
        <Pie {...props} />
    </div>
)