const count = 1000
const scores = [...(new Array(count))]
    .map((_, index) => ({ 
      x: index + 1, 
      y: (Math.random() * 100) * (1 - Math.random())
    }))

const sum = scores
    .map(score => score.y)
    .reduce((acc, curr) => acc + curr );
const mean = sum/count;
const stddev = scores
    .map(score => score.y)
    .reduce((acc, curr) => ((mean - curr) ** 2))/mean;

const zScores = scores.map(({x, y}) => ({
    x,
    y,
    z: ((y - mean)/mean)
}))

console.table({ sum, mean, stddev, count })
console.table(zScores.filter(({z}) => z > 1));

export default {
    labels: ['Scatter'],
    datasets: [
      {
        label: 'Scores of Test',
        fill: false,
        backgroundColor: '#3A2E39',
        pointBorderColor: '#3A2E39',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: scores
      }
    ]
  };
  