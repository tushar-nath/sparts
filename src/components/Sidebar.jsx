// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white p-20">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Main Menu</h2>
        <ul>
          <li className="mb-2">Dashboard</li>
          <li className="mb-2">Academy Menu</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">More</h2>
        <ul>
          <li className="mb-2">Search bar</li>
          <li className="mb-2">Student</li>
          <li className="mb-2">Fee Payment</li>
          <li className="mb-2">Enquiries</li>
          <li className="mb-2">Coaches</li>
          <li>Schedule</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
