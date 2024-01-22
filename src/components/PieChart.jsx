import React from 'react'
import Dropdown from 'react-dropdown-select'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
  const dropdownOptions = [
    { value: '30 days', label: '30 days' },
    { value: '60 days', label: '60 days' },
    { value: '90 days', label: '90 days' },
  ]

  // Sample data for the pie chart
  const pieChartData = {
    labels: ['Amount Pending', 'Amount Received'],
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ['#ff7043', '#546e7a'],
      },
    ],
  }

  const pieChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
  }

  return (
    <div className="flex-1 mr-4 w-96">
      <div>
        {/* Upper Tile */}
        <div className="h-20 mb-2 bg-white rounded-sm">
          <div className="h-11 flex p-2">
            <div className="h-5 mr-auto text-md font-light text-gray-400 mt-2 ml-2">
              Active Students
            </div>
            <div className="h-5 ml-auto text-md font-light text-gray-400 mt-2 mr-2">
              Active Coaches
            </div>
          </div>
          <hr />
          <div className="h-10 flex p-1">
            <div className="text-xl font-normal ml-10 h-5 font-medium">
              5,000
            </div>
            <div className="ml-auto text-xl font-normal mr-14 h-5 font-medium">
              5
            </div>
          </div>
        </div>

        {/* Lower Tile */}
        <div className="h-[26rem] bg-white">
          <div className="bg-white flex h-14 px-4 py-2">
            <div className="mr-auto h-6 text-lg mt-1">Fee Payment Summary</div>
            <div className="ml-4">
              <Dropdown
                options={dropdownOptions}
                placeholder="Select Days"
                className="text-sm text-gray-500 font-light"
              />
            </div>
          </div>

          <hr />
          {/* Pie Chart */}
          <div className="bg-white h-[22rem] pt-6">
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PieChart
