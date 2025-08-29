import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FlightSelection from './pages/FlightSelection';
import CarSelection from './pages/CarSelection';
import AttractionsPage from './pages/AttractionsPage';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flights" element={<FlightSelection />} />
            <Route path="/cars" element={<CarSelection />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/booking/:type/:id" element={<BookingPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;