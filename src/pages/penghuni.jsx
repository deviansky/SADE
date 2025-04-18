import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Navbar from "../components/Navbar";

const dummyData = [
  {
    "id": 1,
    "nama": "Hidayatul Khoiriyah",
    "tanggalLahir": "19/10/2003",
    "prodi": "Manajemen Keuangan",
    "angkatan": 2021,
    "asalDaerah": "Bondowoso",
    "noHp": "082131303030"
  },
  {
    "id": 2,
    "nama": "Hesti Dwi Lestari",
    "tanggalLahir": "01/03/2004",
    "prodi": "TRPL",
    "angkatan": 2021,
    "asalDaerah": "Jember",
    "noHp": "082134567897"
  },
  {
    "id": 3,
    "nama": "Rajendra Nawasena",
    "tanggalLahir": "10/02/2005",
    "prodi": "Manajemen Industri Gizi",
    "angkatan": 60,
    "asalDaerah": "Bandung",
    "noHp": "087865789012"
  },
  {
    "id": 4,
    "nama": "David Reza",
    "tanggalLahir": "15/03/2004",
    "prodi": "Teknologi Rekayasa Perangkat Lunak",
    "angkatan": 59,
    "asalDaerah": "Banten",
    "noHp": "021345667892"
  },
  {
    "id": 5,
    "nama": "Rifaldi Mauda",
    "tanggalLahir": "10/10/2005",
    "prodi": "Teknologi Rekayasa Komputer",
    "angkatan": 60,
    "asalDaerah": "Jakarta",
    "noHp": "078345667892"
  },
  {
    "id": 6,
    "nama": "Jaka Prasetya",
    "tanggalLahir": "20/11/2003",
    "prodi": "Manajemen Industri Gizi",
    "angkatan": 59,
    "asalDaerah": "Parung Panjang",
    "noHp": "058345667892"
  },
  {
    "id": 7,
    "nama": "Aidil Kusumayadi",
    "tanggalLahir": "18/11/2003",
    "prodi": "Teknologi Rekayasa Komputer",
    "angkatan": 59,
    "asalDaerah": "Jakarta",
    "noHp": "089634566789"
  },
  {
    "id": 8,
    "nama": "Fathir Gunadireja",
    "tanggalLahir": "12/11/2006",
    "prodi": "Teknologi Rekayasa Komputer",
    "angkatan": 61,
    "asalDaerah": "Bogor",
    "noHp": "082345678901"
  },
  {
    "id": 9,
    "nama": "Nur Iman Nugraha",
    "tanggalLahir": "10/12/2003",
    "prodi": "Teknologi Rekayasa Perangkat Lunak",
    "angkatan": 59,
    "asalDaerah": "Sumedang",
    "noHp": "087634566789"
  }
  // ...tambah lainnya
];

const Penghuni = () => {
  // const [penghuni, setPenghuni] = useState(dummyData);
  return (
    <div className="flex h-screen">
      <Navbar/>
       {/* Main content */}
       <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Penghuni</h1>
            <h2 className="text-lg text-gray-600 font-normal">
              Data Penguni Asrama Ekasari
            </h2>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Tambah</button>
        </div>
        <div className="overflow-auto rounded shadow bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-white-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Tanggal Lahir</th>
                <th className="px-4 py-2">Prodi</th>
                <th className="px-4 py-2">Angkatan</th>
                <th className="px-4 py-2">Asal Daerah</th>
                <th className="px-4 py-2">No.Tlp</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
            {dummyData.map((item) => (
              <tr key={item.id} className="border-t ">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.nama}</td>
                <td className="px-4 py-2">{item.tanggalLahir}</td>
                <td className="px-4 py-2">{item.prodi}</td>
                <td className="px-4 py-2">{item.angkatan}</td>
                <td className="px-4 py-2">{item.asalDaerah}</td>
                <td className="px-4 py-2">{item.noHp}</td>
                <td className="px-4 my-5 space-x-2 flex ">
                  <button className="text-yellow-500">
                    <FaEdit />
                  </button>
                  <button className="text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Penghuni;