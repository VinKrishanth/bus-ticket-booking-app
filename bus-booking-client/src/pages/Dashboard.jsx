import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import BusSchedule from "../components/admin/BusSchedule";
import SideNavigation from "../components/header/SideNavigation";

export default function Dashboard() {
  const navigate = useNavigate(); 
  const mobileOpen = useSelector((state) => state.theme.isMobileOpen);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [error, setError] = useState(null);
  const Theme = useSelector((state) => state.theme.lightTheme);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 

  useEffect(() => {

    if (!isLoggedIn) {
      navigate("/bus-booking/login"); 
    }

    const fetchWelcomeMessage = async () => {
      try {
        const response = await axiosInstance.get("/");
        setWelcomeMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching the welcome message:", error);
        setError("Failed to load welcome message. Please try again later.");
      }
    };

    if (isLoggedIn) {
      fetchWelcomeMessage();
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={`flex ${Theme ? "bg-white" : "bg-gray-900"} min-h-[85vh]`}>
      <SideNavigation />
      <main
        className={`flex-grow transition-all duration-300 ${mobileOpen ? "sm:ml-0" : "sm:ml-64"} sm:pt-4 pt-20 px-4`}
        style={{ zIndex: 1 }}
      >
        <div className={`rounded-lg p-4`}>
          <h1 className="sm:text-3xl text-lg font-bold text-blue-500">
            Bus Ticket Booking System
          </h1>
          {error ? (
            <p className="mt-2 text-lg text-red-500">{error}</p>
          ) : (
            <p className="mt-2 text-lg">{welcomeMessage || "Loading..."}</p>
          )}
        </div>
      </main>
    </div>
  );
}
