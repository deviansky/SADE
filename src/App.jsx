import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Beranda from "./pages/Beranda";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Keuangan from './pages/Keuangan';
import Kegiatan from './pages/kegiatan';
import Penghuni from './pages/penghuni';
// Import komponen lain yang diperlukan
// ... import komponen lainnya

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/keuangan" element={<Keuangan />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/penghuni" element={<Penghuni />} />
        {/* Tambahkan route lain yang diperlukan */}
        {/* <Route path="/route-lain" element={<KomponenLain />} /> */}
      </Routes>
    </Router>
  )
};

export default App;