import React from "react";

const PieChart = () => {
  return (
    <div className="flex-1 mr-4">
      <div className="">
        {/* Upper Tile */}
        <div className="h-20 mb-2 bg-white rounded-sm">
          <div className="h-11 flex p-2">
            <div className="h-5 mr-auto text-sm text-slate-400 mt-2 ml-2">
              Active Students
            </div>
            <div className="h-5 ml-auto text-sm text-slate-400 mt-2 mr-2">
              Active Coaches
            </div>
          </div>
          <hr />
          <div className="h-10 flex p-1">
            <div className="text-lg ml-10 h-5 font-medium">5,000</div>
            <div className="ml-auto text-lg mr-14 h-5 font-medium">5</div>
          </div>
        </div>

        {/* Lower Tile */}
        <div className="h-96 bg-green-600">
          <div className="bg-white flex">
            <div className="mr-auto">
                Fee Payment Summary
            </div>
            <div className="ml-auto">
              Dropdown
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
