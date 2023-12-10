import React from "react";
import Dropdown from "react-dropdown-select";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(...registerables);

const BarGraph = () => {
  const dropdownOptions = [
    { value: "30 days", label: "30 days" },
    { value: "60 days", label: "60 days" },
    { value: "90 days", label: "90 days" },
  ];

  const barChartData1 = {
    labels: ["Jun '23", "July '23", "Aug '23"],
    datasets: [
      {
        label: "Fee Received",
        backgroundColor: ["#546e7a", "#546e7a", "#546e7a"],
        data: [20, 30, 40],
        indexAxis: "x",
      },
    ],
  };

  const barChartData2 = {
    labels: ["Jun '23", "July '23", "Aug '23"],
    datasets: [
      {
        label: "Active Students",
        backgroundColor: ["#78909c", "#78909c", "#78909c"],
        data: [20, 30, 40],
        indexAxis: "x",
      },
    ],
  };

  const barChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="flex-1 w-1/2">
      <div>
        {/* Upper Tile */}
        <div className="h-20 mb-2 bg-white rounded-sm px-2">
          <div className="h-8 flex py-2 ml-1">
            <div className="h-5 mr-auto text-md font-light text-gray-400">
              Quick Action
            </div>
          </div>
          <div className="h-10 flex p-1 gap-32">
            <button className="w-40 h-8 bg-gray-600 rounded text-white">
              + Add New Student
            </button>
            <button className="w-40 h-8 bg-gray-600 rounded text-white">
              Collect Fees
            </button>
            <button className="w-40 h-8 bg-gray-600 rounded text-white">
              + Add New Enquiry
            </button>
          </div>
        </div>

        {/* Lower Tile */}
        <div className="h-[26rem] bg-white">
          <div className="bg-white flex h-14 px-4 py-2">
            <div className="mr-auto h-6 text-lg mt-1">
              Month On Month Growth
            </div>
            <div className="ml-4">
              <Dropdown
                options={dropdownOptions}
                placeholder="Select Days"
                className="text-sm text-gray-500 font-light"
              />
            </div>
          </div>

          <hr />
          {/* Bar Charts */}
          <div className="bg-white flex">
            <div className="w-1/2 flex-column">
              <div className="mt-2 ml-4 text-gray-500">Revenue</div>
              <div className="px-4 mt-1 h-80">
                <Bar data={barChartData1} options={barChartOptions} />
              </div>
            </div>
            <div className="border-l border-gray-200"></div>
            <div className="w-1/2 flex-column">
              <div className="mt-2 ml-4 text-gray-500">Students</div>
              <div className="px-4 mt-1 h-80">
                <Bar data={barChartData2} options={barChartOptions} />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
