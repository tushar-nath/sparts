import React from "react";
import PieChart from "./PieChart";
import BarGraph from "./BarGraph";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="px-4 bg-gray-100 h-full">
      {/* Upper half */}
      <div className="flex mb-2">
        <PieChart />
        <BarGraph />
      </div>

      {/* Lower half */}
      <Table />
    </div>
  );
};

export default Dashboard;
