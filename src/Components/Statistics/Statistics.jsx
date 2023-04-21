import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Future plan",
    mark: "40",
  },
  {
    name: "g3-architects",
    mark: "25",
  },
  {
    name: "legal solution",
    mark: "60",
  },
  {
    name: "Geometry",
    mark: "20",
  },
  {
    name: "AI universe",
    mark: "60",
  },
  {
    name: "Knowledge cafe",
    mark: "10",
  },
  {
    name: "Problem solve JS",
    mark: "60",
  },
];
const Statistics = () => {
  return (
    <div>
      <h4 className="text-center mt-5">Assignments Chart</h4>
      <div className="w-100 mt-5 d-flex justify-content-center">
        <AreaChart
          width={1200}
          height={400}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
