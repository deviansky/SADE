import React from "react";
import { Link } from "react-router-dom";
import { Home, CreditCard, Calendar, Users, LogOut } from "react-feather";

const Navbar = () => {
  return (
    <div className="w-64 bg-indigo-700 text-white">
      <div className="p-4 flex items-center border-b border-indigo-600">
        <div className="bg-white rounded-full p-1 mr-2">
          <span className="text-indigo-700 text-xs font-bold">AI</span>
        </div>
        <span className="font-semibold">Admin Heapat</span>
      </div>

      <nav className="mt-4">
        <Link to="/">
          <div className="px-4 py-3 flex items-center">
            <Home className="h-5 w-5 mr-3" />
              <span>Beranda</span>
          </div>
        </Link>
        <Link to="/Keuangan">
          <div className="px-4 py-3 flex items-center">
            <CreditCard className="h-5 w-5 mr-3" />
            <span>Keuangan</span>
          </div>
        </Link>
        <Link to="/kegiatan">
          <div className="px-4 py-3 flex items-center">
            <Calendar className="h-5 w-5 mr-3" />
            <span>Kegiatan</span>
          </div>
        </Link>
        <Link to="/penghuni">
        <div className="px-4 py-3 flex items-center">
          <Users className="h-5 w-5 mr-3" />
          <span>Penghuni</span>
        </div>
        </Link>
      </nav>

      <div className="absolute bottom-0 left-0 w-64 border-t border-indigo-600">
        <div className="px-4 py-3 flex items-center text-white">
          <LogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
