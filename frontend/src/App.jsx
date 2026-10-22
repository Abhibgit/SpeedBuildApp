

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import CalculatorResultPage from './pages/CalculatorResultPage.jsx';
import HeatPumpCalculatorPage from './pages/HeatPumpCalculatorPage.jsx';
import NewEquipmentPage from './pages/NewEquipmentPage.jsx';
import PriceCardResultPage from './pages/PriceCardResultPage.jsx';
import VendorSelectionPage from './pages/VendorSelectionPage.jsx';


function App() {
  

  return (
    <div
      
    >
      
          <Router>
            <Routes>
              
              <Route
                path="/"
                element={
               
                    <LandingPage />
                
                }
              
              />
              <Route
                path="/Results"
                element={
               
                    <CalculatorResultPage/>
                
                }
              
              /><Route
                path="/HpCalc"
                element={
               
                    <HeatPumpCalculatorPage />
                
                }
              
              /><Route
                path="/NewEquipment"
                element={
               
                    <NewEquipmentPage />
                
                }
              
              /><Route
                path="/Prices"
                element={
               
                    <PriceCardResultPage />
                
                }
              
              />
              <Route
                path="/VendorSelection"
                element={
               
                    <VendorSelectionPage />
                
                }
              
              />
            </Routes>
          </Router>
       
    </div>
  );
}

export default App;
