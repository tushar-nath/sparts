import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { TbDots } from "react-icons/tb";

const Table = () => {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getRandomDate = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const randomDay = days[Math.floor(Math.random() * days.length)];
    const randomDate = Math.floor(Math.random() * 30) + 1;
    const randomMonth = "Sep";
    return `${randomDay}, ${String(randomDate).padStart(
      2,
      "0"
    )} ${randomMonth}`;
  };

  const getRandomTimeInterval = () => {
    const randomHourStart = Math.floor(Math.random() * 12) + 1;
    const randomMinuteStart = Math.floor(Math.random() * 60);
    const randomHourEnd = randomHourStart + Math.floor(Math.random() * 3) + 1;
    const randomMinuteEnd = Math.floor(Math.random() * 60);
    const ampm = Math.random() < 0.5 ? "am" : "pm";

    return `${randomHourStart}:${String(randomMinuteStart).padStart(
      2,
      "0"
    )}${ampm} - ${randomHourEnd}:${String(randomMinuteEnd).padStart(
      2,
      "0"
    )}${ampm}`;
  };

  const getRandomClass = () => {
    const classes = [
      "Badminton Class",
      "Yoga Class",
      "Dance Class",
      "Meditation",
    ];
    return classes[Math.floor(Math.random() * classes.length)];
  };

  const getRandomStudentName = () => {
    const firstNames = ["Jonas", "Alice", "Bob", "Eva", "Michael", "Olivia"];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Jones",
      "Brown",
      "Davis",
    ];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  };

  const generateRandomScheduleData = () => {
    const numberOfEntries = 8;
    const data = [];

    for (let i = 1; i <= numberOfEntries; i++) {
      data.push({
        id: i,
        date: getRandomDate(),
        timeInterval: getRandomTimeInterval(),
        class: getRandomClass(),
        students: [
          getRandomStudentName(),
          getRandomStudentName(),
          getRandomStudentName(),
          getRandomStudentName(),
        ],
      });
    }

    return data;
  };

  const scheduleData = generateRandomScheduleData();

  return (
    <div className="h-[26rem] bg-white p-4 rounded shadow">
      {/* Upper Bar */}
      <div className="h-10 flex gap-72">
        <div className="text-lg">Upcoming Schedule</div>
        <div className="flex gap-6 ml-4">
          <CiFilter size={28} />
          <button
            className={`w-24 h-8 rounded-lg text-white ${
              activeButton === "All" ? "bg-gray-600" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick("All")}
          >
            All
          </button>
          <button
            className={`w-24 h-8 rounded-lg text-white ${
              activeButton === "Classes" ? "bg-gray-600" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick("Classes")}
          >
            Classes
          </button>
          <button
            className={`w-24 h-8 rounded-lg text-white ${
              activeButton === "Meetings" ? "bg-gray-600" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick("Meetings")}
          >
            Meetings
          </button>
          <button
            className={`w-24 h-8 rounded-lg text-white ${
              activeButton === "Events" ? "bg-gray-600" : "bg-gray-400"
            }`}
            onClick={() => handleButtonClick("Events")}
          >
            Events
          </button>
        </div>
        <div className="ml-auto">
          <TbDots size={28} />
        </div>
      </div>
      <hr />

      {/* Table */}
      <div className="overflow-y-auto h-80">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 text-left">Checkbox</th>
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Time Interval</th>
              <th className="py-2 text-left">Class</th>
              <th className="py-2 text-left">Students</th>
              <th className="py-2 text-left">Information</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((entry) => (
              <tr key={entry.id}>
                <td className="py-2 text-left">
                  <input type="checkbox" />
                </td>
                <td className="py-2 text-left">{entry.date}</td>
                <td className="py-2 text-left">{entry.timeInterval}</td>
                <td className="py-2 text-left">{entry.class}</td>
                <td className="py-2 text-left">{entry.students.join(", ")}</td>
                <td className="py-2 text-left text-blue-400">
                  <a href="#">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
