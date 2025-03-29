import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Beranda from "./pages/Beranda";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Keuangan from './pages/Keuangan';
// Import komponen lain yang diperlukan
// ... import komponen lainnya

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/keuangan" element={<Keuangan />} />
        {/* Tambahkan route lain yang diperlukan */}
        {/* <Route path="/route-lain" element={<KomponenLain />} /> */}
      </Routes>
    </Router>
  )
};

export default App;