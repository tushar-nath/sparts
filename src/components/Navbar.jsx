import React from "react";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import ProfileImg from "../images/pfp.jpg";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-2 h-24">
      <div className="container mx-auto flex justify-between items-center">
        {/* Welcome Message */}
        <div className="ml-1">
          <div className="text-4xl h-12">Welcome Tushar,</div>
          <div className="text-xl font-light">
            Here is a summary of your business
          </div>
        </div>

        {/* Icons */}
        <div className="flex ml-96">
          <div className="mr-4 bg-gray-200 h-16 w-16 flex items-center justify-center rounded-full cursor-pointer">
            <IoSettingsOutline size={32} className="text-2xl" />
          </div>
          <div className="bg-gray-200 h-16 w-16 flex items-center justify-center rounded-full cursor-pointer">
            <IoNotificationsOutline size={32} className="text-2xl" />
          </div>
        </div>

        {/* Name and Email */}
        <div>
          <div className="flex gap-5 w-72">
            <img
              src={ProfileImg}
              alt="profile"
              className="rounded-full h-16 w-16"
            />
            <div className="flex-column">
              <div className="h-8 text-2xl items-center justify-center cursor-pointer">
                Tushar Nath
              </div>
              <div className="font-light p-1">tusharnath10@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
