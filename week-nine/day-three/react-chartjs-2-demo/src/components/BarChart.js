import React from 'react';
import { Bar } from 'react-chartjs-2';

export default ({data, width, height}) => (
    <div className="chart">
        <h1>Bar Chart</h1>
        <Bar
            data={data}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
);