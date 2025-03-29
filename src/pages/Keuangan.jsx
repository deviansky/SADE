import React from "react";
import { Home, CreditCard, Calendar, Users, User, LogOut } from "lucide-react";
import Navbar from "../components/Navbar";

const Keuangan = () => {
  // const incomeData = [
  //   { id: 1, date: 'NH/10064', amount: 'Rp000000', description: 'Swoo', status: '💤 💤' },
  //   { id: 2, date: '26/01/2024', amount: 'Rp000000', description: 'Swoo', status: '💤 💤' },
  //   { id: 3, date: 'NH/10066', amount: 'Rp000000', description: 'Swoo', status: '💤 💤' },
  //   { id: 4, date: '26/01/2025', amount: 'Rp000000', description: 'Swoo', status: '💤 💤' },
  // ]
  const incomeData = [
    {
      id: 1,
      date: "2022-01-01",
      amount: 100000,
      description: "Pemasukan bulan Januari",
    },
    {
      id: 2,
      date: "2022-02-15",
      amount: 200000,
      description: "Pemasukan bulan Februari",
    },
    {
      id: 3,
      date: "2022-02-15",
      amount: 200000,
      description: "Pemasukan bulan Februari",
    },
    {
      id: 4,
      date: "2022-03-10",
      amount: 300000,
      description: "Pemasukan bulan Maret",
    },
    {
      id: 5,
      date: "2022-04-05",
      amount: 400000,
      description: "Pemasukan bulan April",
    },
  ];
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-1">Keunagan</h1>
          <h2 className="text-lg text-gray-600 font-normal">
            Data Keuangan Asrama Ekosari
          </h2>
          <section className="mt-7">
            <h3 className="text-xl font-medium mb-3">Daftar Pemasukan</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 font-semibold">
                    <th className="border border-gray-300 p-3 text-left">No</th>
                    <th className="border border-gray-300 p-3 text-left">
                      Tanggal Pemasukan
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Jumlah
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Deskripsi
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {incomeData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3">{item.id}</td>
                      <td className="border border-gray-300 p-3">
                        {item.date}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {item.amount}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {item.description}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-sm text-gray-600 mt-3">
              <p>Strategy 10.1 of details</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Keuangan;
