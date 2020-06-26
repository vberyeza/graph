import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function Curve() {
  const stockData = useSelector((state) => state.stockData);
  const dataArray = stockData.map((item) => item.stocks);

  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={dataArray}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="CAC40" stroke="#8884d8" activeDot={{ r: 8 }} isAnimationActive={false} />
        <Line type="monotone" dataKey="NASDAQ" stroke="#82ca9d" isAnimationActive={false} />
      </LineChart>
    </>
  );
}

export default Curve;
