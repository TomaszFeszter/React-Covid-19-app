import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { formatNumber } from "../../utils/formatNumber";

export function Example({ data }) {
  const formattedData = data.map((item) => ({
    date: `${
      new Date(item.date.split("T")).toLocaleString("default", {
        month: "short",
      }) +
      " " +
      parseInt(item.date.slice(8, 10), 10)
    }`,
    cases: item.confirmed_daily,
  }));

  return (
    <BarChart
      width={325}
      height={160}
      data={formattedData}
      margin={{
        left: -25,
        right: 6,
        bottom: -10,
      }}
    >
      <CartesianGrid strokeDasharray="6 4" vertical={false} stroke="#DFE3F2" />
      <XAxis
        dataKey="date"
        stroke="#999FBF"
        axisLine={false}
        tickLine={false}
        fontSize={11}
      />
      <YAxis
        tickFormatter={(scope) => formatNumber.format(scope)}
        stroke="#999FBF"
        axisLine={false}
        tickLine={false}
        fontSize={11}
      />
      <Tooltip />
      <Bar dataKey="cases" fill="#ff5959" barSize={6} radius={3} />
    </BarChart>
  );
}
