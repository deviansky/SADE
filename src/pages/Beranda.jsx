import React from "react";
import { Home, CreditCard, Calendar, Users, User, LogOut } from "lucide-react";
import Navbar from "../components/Navbar";
// import axios from "axios";

const Beranda = () => {
  // Sample data for the graph
  const graphData = [20, 35, 25, 40, 30, 45, 35, 50];

  // Get current date for the calendar
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create calendar days
  const calendarDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // First day of month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Month names in Indonesian
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar/>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className=" ">Beranda</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-500 mb-1">
                Total Penghuni Asrama
              </div>
              <div className="flex justify-between items-end">
                <div className="text-3xl font-bold">29</div>
                <div className="flex items-center text-sm">
                  <Users className="h-6 w-6 text-indigo-700" />
                  <span className="ml-1">Total Penghuni</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-500 mb-1">Jumlah Kamar</div>
              <div className="flex justify-between items-end">
                <div className="text-3xl font-bold">10</div>
                <div className="flex items-center text-sm">
                  <Home className="h-6 w-6 text-indigo-700" />
                  <span className="ml-1">Kamar Tersedia</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-500 mb-1">Total Dana</div>
              <div className="flex justify-between items-end">
                <div className="text-3xl font-bold">Rp2.355.500</div>
                <div className="flex items-center text-sm">
                  <CreditCard className="h-6 w-6 text-indigo-700" />
                  <span className="ml-1">Laba Kotor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-3 gap-6">
            {/* Graph Panel */}
            <div className="col-span-2 bg-white p-4 rounded-lg shadow">
              <h2 className="font-bold mb-4">Grafik Keuangan</h2>
              <div className="h-48 w-full">
                <svg viewBox="0 0 400 150" className="w-full h-full">
                  {/* Graph Background Lines */}
                  <line
                    x1="0"
                    y1="120"
                    x2="400"
                    y2="120"
                    stroke="#eee"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="80"
                    x2="400"
                    y2="80"
                    stroke="#eee"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="40"
                    x2="400"
                    y2="40"
                    stroke="#eee"
                    strokeWidth="1"
                  />

                  {/* Graph Line */}
                  <path
                    d={`M 50 ${120 - graphData[0]} 
                       L 100 ${120 - graphData[1]} 
                       L 150 ${120 - graphData[2]} 
                       L 200 ${120 - graphData[3]} 
                       L 250 ${120 - graphData[4]} 
                       L 300 ${120 - graphData[5]} 
                       L 350 ${120 - graphData[6]}
                       L 400 ${120 - graphData[7]}`}
                    fill="none"
                    stroke="#4c4ce6"
                    strokeWidth="2"
                  />

                  {/* Graph Points */}
                  {graphData.map((point, index) => (
                    <circle
                      key={index}
                      cx={50 + index * 50}
                      cy={120 - point}
                      r="3"
                      fill="#4c4ce6"
                    />
                  ))}
                </svg>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Januari</span>
                <span>Februari</span>
                <span>Maret</span>
                <span>April</span>
                <span>Mei</span>
                <span>Juni</span>
              </div>
            </div>

            {/* Right Side Panel */}
            <div className="space-y-6">
              {/* Calendar */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold mb-2">Jadwal Kegiatan Mendatang</h2>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span>
                    {monthNames[currentMonth]} {currentYear}
                  </span>
                  <div className="flex space-x-2">
                    <button className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                      &lt;
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                      &gt;
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-xs">
                  <div className="text-center font-medium">M</div>
                  <div className="text-center font-medium">S</div>
                  <div className="text-center font-medium">S</div>
                  <div className="text-center font-medium">R</div>
                  <div className="text-center font-medium">K</div>
                  <div className="text-center font-medium">J</div>
                  <div className="text-center font-medium">S</div>

                  {/* Empty slots for alignment */}
                  {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="text-center p-1"
                    ></div>
                  ))}

                  {/* Calendar days */}
                  {calendarDays.map((day) => (
                    <div
                      key={`day-${day}`}
                      className={`text-center p-1 rounded-full ${
                        day === currentDate.getDate()
                          ? "bg-indigo-700 text-white"
                          : ""
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Circle */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold mb-2">
                  Rate-rata Kehadiran Bulan ini
                </h2>
                <div className="flex justify-center items-center">
                  <div className="relative flex items-center justify-center w-32 h-32">
                    {/* Background Circle */}
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="10"
                      />
                      {/* Progress Circle - 85% filled */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#4c4ce6"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="37.68"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute text-2xl font-bold">85%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
