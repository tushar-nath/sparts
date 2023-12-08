import React from "react";
import PieChart from "./PieChart";
import BarGraph from "./BarGraph";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>

      {/* Upper half */}
      <div className="flex mb-8">
        <PieChart />
        <BarGraph />
      </div>

      {/* Lower half */}
      <Table />
    </div>
  );
};

export default Dashboard;
