import React from "react";
import Navbar from "../components/Navbar";

const kegiatan = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar/>
      {/* Maian Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-1">Kegiatan</h1>
          <h2 className="text-lg text-gray-600 font-normal">Data Kegiatan Asrama Ekasari</h2>

          <section className="mt-7">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-500 mb-3">
                Kegiatan yang Akan Datang
              </h2>
              <button className="bg-blue-700 mr-10 px-5 py-3 text-white rounded-lg">Tambah</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
              <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">Judul Card</h2>
                  <p className="text-gray-700 mb-4">Deskripsi singkat dari card ini. Menarik banget untuk dilihat.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Aksi</button>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-500  my-10">
              Arsip Kegiatan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
              <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">Judul Card</h2>
                  <p className="text-gray-700 mb-4">Deskripsi singkat dari card ini. Menarik banget untuk dilihat.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Aksi</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default kegiatan;
