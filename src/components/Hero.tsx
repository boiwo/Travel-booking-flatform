import React, { useState } from 'react';
import SearchTabs from './SearchTabs';
import HotelSearch from './search/HotelSearch';
import FlightSearch from './search/FlightSearch';
import CarRentalSearch from './search/CarRentalSearch';
import AttractionsSearch from './search/AttractionsSearch';
import AirTaxiSearch from './search/AirTaxiSearch';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('hotels');

  const renderSearchForm = () => {
    switch (activeTab) {
      case 'hotels':
        return <HotelSearch />;
      case 'flights':
        return <FlightSearch />;
      case 'cars':
        return <CarRentalSearch />;
      case 'attractions':
        return <AttractionsSearch />;
      case 'air-taxis':
        return <AirTaxiSearch />;
      default:
        return <HotelSearch />;
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your next adventure
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Search and compare millions of hotels, flights, and experiences worldwide
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-900 max-w-6xl mx-auto">
          <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {renderSearchForm()}
        </div>
      </div>
    </section>
  );
}