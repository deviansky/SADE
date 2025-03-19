import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Beranda from "./pages/Beranda";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Import komponen lain yang diperlukan
// ... import komponen lainnya

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        {/* Tambahkan route lain yang diperlukan */}
        {/* <Route path="/route-lain" element={<KomponenLain />} /> */}
      </Routes>
    </Router>
  )
};

export default App;