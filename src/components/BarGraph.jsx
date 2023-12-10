import React from "react";

const BarGraph = () => {
  return (
    <div className="flex-1">
      <div className="bg-white p-4 rounded shadow">
        <div className="h-10 bg-red-600 mb-4"></div>
        <div className="h-96 bg-green-600"></div>
      </div>
    </div>
  );
};

export default BarGraph;
