import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SiteHeader from './components/shared-components/SiteHeader';

import LandingPage from './pages/LandingPage';
import CalculatorResultPage from './pages/CalculatorResultPage';
import HeatPumpCalculatorPage from './pages/HeatPumpCalculatorPage';
import NewEquipmentPage from './pages/NewEquipmentPage';
import PriceCardResultPage from './pages/PriceCardResultPage';
import VendorSelectionPage from './pages/VendorSelectionPage';

function App() {
  return (
    <Router>
      
      <SiteHeader />

      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Results" element={<CalculatorResultPage />} />
        <Route path="/HpCalc" element={<HeatPumpCalculatorPage />} />
        <Route path="/NewEquipment" element={<NewEquipmentPage />} />
        <Route path="/Prices" element={<PriceCardResultPage />} />
        <Route path="/VendorSelection" element={<VendorSelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;