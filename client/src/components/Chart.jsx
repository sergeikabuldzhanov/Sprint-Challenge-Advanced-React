import React from "react";
import CustomTooltip from "./CustomTooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label
} from "recharts";
import useSortDataByKey from "../hooks/useSortDataByKey";

export default function Chart(props) {
  console.log(props.data);

  const [sortedData, setData] = useSortDataByKey(props.data, "country");
  console.log(sortedData[0]);
  return (
    <div className="chart">
      <h2>Searches per player</h2>
      <ResponsiveContainer aspect={2} width={"100%"}>
        <BarChart data={sortedData}>
          <Bar dataKey="searches" fill="#3EC9CB" />
          <XAxis
            padding={{ left: 0, right: 10 }}
            minTickGap={100}
            dataKey="country"
          >
            <Label value="Players" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis dataKey="searches" />
          <Tooltip content={<CustomTooltip />} />
        </BarChart>
      </ResponsiveContainer>
      {Object.keys(sortedData[0]).map(key => {
        return <button className = "sort-button" onClick={e => setData(key)}>{key}</button>;
      })}
    </div>
  );
}
