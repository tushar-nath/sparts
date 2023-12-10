import React, { useEffect, useState } from "react";
import {
  FaUniversity,
  FaComments,
  FaChalkboardTeacher,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  IoStatsChartOutline,
  IoSearch,
  IoPeople,
  IoCashOutline,
} from "react-icons/io5";
import logo from "../images/sparts-logo.png";

const formatDate = (date) => {
  const options = { weekday: "long", day: "2-digit", month: "short" };
  return new Date(date).toLocaleDateString("en-US", options);
};

const Sidebar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setCurrentDate(formatDate(today));
  }, []);

  const menuItems = [
    { name: "Main Menu", link: "/main-menu" },
    { name: "Dashboard", icon: <IoStatsChartOutline />, link: "/dashboard" },
    { name: "Academy Management", icon: <FaUniversity />, link: "/academy" },
    { name: "More", link: "/more" },
    {
      name: "Search",
      icon: <IoSearch className="text-slate-400 ml-2" />,
      placeholder: "Search students by name",
    },
    { name: "Students", icon: <IoPeople />, link: "/students" },
    { name: "Fee Payments", icon: <IoCashOutline />, link: "/fees" },
    { name: "Enquiries", icon: <FaComments />, link: "/enquiries" },
    { name: "Coaches", icon: <FaChalkboardTeacher />, link: "/coaches" },
    { name: "Schedule", icon: <FaCalendarAlt />, link: "/schedule" },
  ];

  return (
    <aside className="bg-gray-600 text-white font-semibold w-60">
      {/* Upper Logo */}
      <div className="mb-8">
        <div className="bg-gray-100 h-24 p-1">
          <div className="ml-2">
            <img src={logo} alt="logo" style={{ width: "180px" }} />
          </div>
          <p className="text-black font-light text-lg ml-10 w-36">{currentDate}</p>
        </div>
      </div>

      {/* Lower Links */}
      <div className="p-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center mb-8 ${
              item.name === "More" ? "mt-20" : ""
            }`}
          >
            {item.name === "Search" ? (
              <div className="ml-2 p-1 bg-white flex items-center rounded-2xl">
                {item.icon}
                <input
                  type="text"
                  placeholder={item.placeholder}
                  className="text-sm bg-transparent px-2 py-1 rounded outline-none font-light"
                />
              </div>
            ) : (
              <>
                {item.icon && <div className="ml-2">{item.icon}</div>}
                <a href={item.link} className="ml-3 text-md">
                  {item.name}
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
