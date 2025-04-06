import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans';
import VansDetail from './pages/VansDetail';
import Layout from './components/Layout';
import "./server"
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './pages/Host/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansDetailLayout from './pages/Host/HostVansDetailLayout';
import HostVansDetail from './pages/Host/HostVansDetail';
import HostVansPricing from './pages/Host/HostVansPricing';
import HostVansPhotos from './pages/Host/HostVanPhotos';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans/>} />
            <Route path="vans/:id" element={<HostVansDetailLayout/>}>
              <Route index element={<HostVansDetail/>}/>
              <Route path="pricing" element={<HostVansPricing/>}/>
              <Route path="photos" element={<HostVansPhotos/>}/>
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
