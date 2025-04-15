import React from "react";
import ImgAsrama from "../components/ImgAsrama";
import logo from "../assets/logo.png"
import { Eye, EyeOff } from 'lucide-react';

const LoginScreen = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { username, password });
    // Di sini Anda dapat menambahkan logika autentikasi
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <ImgAsrama/>
      <div className="mx-5 mt-5">
        {/* Logo */}
        <img src={logo} alt="logo" className=""/>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Tab navigation */}
          <div className="flex mb-8">
            <div className="w-1/2">
              <button className="w-full py-2 bg-indigo-700 text-white font-medium rounded-md">
                Admin
              </button>
            </div>
            <div className="w-1/2">
              <button className="w-full py-2 text-indigo-700 bg-white font-medium rounded-md">
                Penghuni
              </button>
            </div>
          </div>
          {/* Bisa page baru ini di sini */}
          {/* Judul dan deskripsi */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Login Admin Ekasari</h1>
            <p className="text-gray-600">
              Silahkan Isi Data Dibawah Ini Untuk Login Sebagai Admin
            </p>
          </div>
          {/* Form */} {/* Masih Bermasalah*/} 
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              {/* <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="adminekasari"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;