import React from 'react';
import Chart from '../Chart/Chart.jsx';

const ExpensesChart = (props) => {
  const chartDataPoint = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 = January
    chartDataPoint[expenseMonth].value += expense.amount; // increase the value of the month by adding the expesne amount
  }
  return <Chart dataPoint={chartDataPoint} />;
};

export default ExpensesChart;
