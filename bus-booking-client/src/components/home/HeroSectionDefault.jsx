import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBus, FaQuestionCircle, FaExchangeAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

export default function HeroSectionDefault() {
    const [departureStation, setDepartureStation] = useState('');
    const [arrivalStation, setArrivalStation] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const [stations, setStations] = useState([]);
    const [filteredDepartureStations, setFilteredDepartureStations] = useState([]);
    const [filteredArrivalStations, setFilteredArrivalStations] = useState([]);
    const navigation = useNavigate();
    const Theme = useSelector(state => state.theme.lightTheme);

    useEffect(() => {
        const fetchStations = async () => {
            const mockStations = ['Colombo', 'Galle', 'Kandy', 'Jaffna', 'Anuradhapura', 'Trincomalee'];
            setStations(mockStations);
        };
        fetchStations();
    }, []);

    const handleStationFilter = (input, type) => {
        const filtered = stations.filter(station => 
            station.toLowerCase().includes(input.toLowerCase())
        );
        if (type === 'departure') {
            setFilteredDepartureStations(filtered);
        } else {
            setFilteredArrivalStations(filtered);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ departureStation, arrivalStation, journeyDate });
        navigation(`/bus-booking/search-buses`);
    };

    const swapStations = () => {
        setDepartureStation(arrivalStation);
        setArrivalStation(departureStation);
    };

    return (
        <div className={`min-h-screen`}>
            <div className={`relative h-[50vh] flex items-center justify-center px-2 ${Theme ? 'text-white' : 'text-primary'} `}>
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0 "
                    style={{
                        backgroundImage: '',
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <div className={`absolute inset-0 ${Theme ? 'bg-black/50 ' : 'bg-white/50 '}`}></div>
                </div>
                
                <div className="z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">Explore Sri Lanka</h1>
                    <p className="text-xl md:text-2xl">Discover the beauty of the island with our bus services</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 -mt-24 relative z-20">
                <div className={` ${Theme ? 'bg-white' : 'bg-gray-800'} rounded-xl shadow-2xl p-6 md:p-8`}>
                    <h2 className="text-2xl md:text-3xl text-gray-800 mb-6">
                        Book Your Bus Tickets in Sri Lanka
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
                        <div className="space-y-2">
                            <label className={`block text-sm font-medium  ${Theme ? 'text-gray-700' : 'text-white'}`}>FROM</label>
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Enter departure station"
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                    value={departureStation}
                                    onChange={(e) => {
                                        setDepartureStation(e.target.value);
                                        handleStationFilter(e.target.value, 'departure');
                                    }}
                                />
                                {filteredDepartureStations.length > 0 && (
                                    <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                                        {filteredDepartureStations.map((station, index) => (
                                            <li 
                                                key={index}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    setDepartureStation(station);
                                                    setFilteredDepartureStations([]);
                                                }}
                                            >
                                                {station}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">TO</label>
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Enter arrival station"
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                    value={arrivalStation}
                                    onChange={(e) => {
                                        setArrivalStation(e.target.value);
                                        handleStationFilter(e.target.value, 'arrival');
                                    }}
                                />
                                {filteredArrivalStations.length > 0 && (
                                    <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                                        {filteredArrivalStations.map((station, index) => (
                                            <li 
                                                key={index}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    setArrivalStation(station);
                                                    setFilteredArrivalStations([]);
                                                }}
                                            >
                                                {station}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">JOURNEY DATE</label>
                            <div className="relative">
                                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                    value={journeyDate}
                                    onChange={(e) => setJourneyDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Action</label>
                            <button
                                type="submit"
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <FaBus className="h-5 w-5" />
                                Find Buses
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 flex justify-between items-center">
                        <button
                            onClick={swapStations}
                            className="text-sky-500 hover:text-sky-600 flex items-center gap-1"
                        >
                            <FaExchangeAlt className="h-4 w-4" />
                            Swap Stations
                        </button>
                        <a href="#" className="text-emerald-500 hover:text-emerald-600 flex items-center gap-1">
                            <FaQuestionCircle className="h-4 w-4" />
                            Need help?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}