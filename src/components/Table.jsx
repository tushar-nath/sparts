import React from "react";
import { CiFilter } from "react-icons/ci";
import { TbDots } from "react-icons/tb";

const Table = () => {
  return (
    <div className="h-[26rem] bg-white p-4 rounded shadow">
      {/* Upper Bar */}
      <div className="h-10 flex gap-72">
        <div className="text-lg">Upcoming Schedule</div>
        <div className="flex gap-6 ml-4">
          <CiFilter size={28} />
          <button className="w-24 h-8 bg-gray-600 rounded-lg text-white">
            All
          </button>
          <button className="w-24 h-8 bg-gray-600 rounded-lg text-white">
            Classes
          </button>
          <button className="w-24 h-8 bg-gray-600 rounded-lg text-white">
            Meetings
          </button>
          <button className="w-24 h-8 bg-gray-600 rounded-lg text-white">
            Events
          </button>
        </div>
        <div className="ml-auto">
          <TbDots size={28} />
        </div>
      </div>
      <hr />

      {/* Table */}
      <div></div>
    </div>
  );
};

export default Table;
