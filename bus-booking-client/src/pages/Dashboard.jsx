import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import { useSelector } from "react-redux";
import BusSchedule from "../components/admin/BusSchedule";
import SideNavigation from "../components/header/SideNavigation";

export default function Dashboard() {
  const mobileOpen = useSelector((state) => state.theme.isMobileOpen);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const Theme = useSelector((state) => state.theme.lightTheme);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await axiosInstance.get("/");
        setWelcomeMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching the welcome message:", error);
        setWelcomeMessage("Failed to load message.");  
      }
    };

    fetchWelcomeMessage();
  }, []);

  return (
    <div className={`flex ${Theme ? "bg-white" : "bg-gray-900"} min-h-[90vh]`}>
      <SideNavigation />
      <main
        className={`flex-grow transition-all duration-300 ${
          mobileOpen ? "sm:ml-0" : "sm:ml-64"
        } sm:pt-4 pt-20 px-4`}
        style={{ zIndex: 1 }} 
      >
        <div
          className={`rounded-lg p-4`}
        >
          <h1 className="sm:text-3xl text-lg font-bold text-blue-500">
            Bus Ticket Booking System
          </h1>
          <p className="mt-2 text-lg">
            {welcomeMessage || "Loading..."}
          </p>
        </div>

        {/* Uncomment below if BusSchedule is needed */}
        {/* <div className="mt-4">
          <BusSchedule />
        </div> */}
      </main>
    </div>
  );
}