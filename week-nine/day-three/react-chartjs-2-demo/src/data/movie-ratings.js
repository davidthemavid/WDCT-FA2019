export default {
    labels: ['Ratings'],
    datasets: [
        {
            label: 'Movie Ratings',
            fill: false,
            backgroundColor: '#000',
            pointBorderColor: '#000',
            pointBackgroundColor: '#000',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#000',
            pointHoverBorderColor: '#000',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [...new Array(500)].map((_, index) => ({ x: Math.random(), y: Math.random()}))
        }
    ]
};