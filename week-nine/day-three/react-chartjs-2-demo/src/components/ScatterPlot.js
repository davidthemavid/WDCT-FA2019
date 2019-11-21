import React from 'react';
import { Scatter } from 'react-chartjs-2';

export default ({title, ...props}) => (
    <div className="chart">
      <h1>{title}</h1>
      <Scatter {...props} />
    </div>
  )