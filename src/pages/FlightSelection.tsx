import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Clock, ArrowRight, Star, Wifi, Coffee, Monitor } from 'lucide-react';

export default function FlightSelection() {
  const navigate = useNavigate();
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

  const flights = [
    {
      id: 'AA123',
      airline: 'American Airlines',
      departure: { time: '08:30', airport: 'JFK', city: 'New York' },
      arrival: { time: '11:45', airport: 'LAX', city: 'Los Angeles' },
      duration: '5h 15m',
      stops: 'Direct',
      price: 299,
      class: 'Economy',
      amenities: ['WiFi', 'Entertainment', 'Meals'],
      rating: 4.2,
    },
    {
      id: 'DL456',
      airline: 'Delta Airlines',
      departure: { time: '14:20', airport: 'JFK', city: 'New York' },
      arrival: { time: '17:55', airport: 'LAX', city: 'Los Angeles' },
      duration: '5h 35m',
      stops: 'Direct',
      price: 349,
      class: 'Economy Plus',
      amenities: ['WiFi', 'Entertainment', 'Premium Meals'],
      rating: 4.5,
    },
    {
      id: 'UA789',
      airline: 'United Airlines',
      departure: { time: '19:10', airport: 'JFK', city: 'New York' },
      arrival: { time: '22:30', airport: 'LAX', city: 'Los Angeles' },
      duration: '5h 20m',
      stops: 'Direct',
      price: 279,
      class: 'Economy',
      amenities: ['WiFi', 'Entertainment'],
      rating: 4.0,
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'entertainment':
        return <Monitor className="w-4 h-4" />;
      case 'meals':
      case 'premium meals':
        return <Coffee className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const handleBookFlight = (flightId: string) => {
    navigate(`/booking/flight/${flightId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Your Flight</h1>
        <p className="text-gray-600">New York (JFK) → Los Angeles (LAX) • March 15, 2025</p>
      </div>

      <div className="space-y-4">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className={`bg-white rounded-xl shadow-md border-2 transition-all duration-200 hover:shadow-lg ${
              selectedFlight === flight.id ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Plane className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
                        <p className="text-sm text-gray-600">{flight.id} • {flight.class}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{flight.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{flight.departure.time}</div>
                      <div className="text-sm text-gray-600">{flight.departure.airport}</div>
                      <div className="text-xs text-gray-500">{flight.departure.city}</div>
                    </div>
                    
                    <div className="flex-1 mx-8">
                      <div className="flex items-center justify-center">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <div className="mx-4 text-center">
                          <Clock className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">{flight.duration}</div>
                          <div className="text-xs text-green-600 font-medium">{flight.stops}</div>
                        </div>
                        <div className="flex-1 h-px bg-gray-300"></div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{flight.arrival.time}</div>
                      <div className="text-sm text-gray-600">{flight.arrival.airport}</div>
                      <div className="text-xs text-gray-500">{flight.arrival.city}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {flight.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:ml-8 flex flex-col items-end">
                  <div className="text-right mb-4">
                    <div className="text-3xl font-bold text-gray-900">${flight.price}</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedFlight(selectedFlight === flight.id ? null : flight.id)}
                      className={`px-6 py-2 border rounded-lg transition-colors ${
                        selectedFlight === flight.id
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 text-gray-700 hover:border-blue-600'
                      }`}
                    >
                      {selectedFlight === flight.id ? 'Selected' : 'Select'}
                    </button>
                    <button
                      onClick={() => handleBookFlight(flight.id)}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold"
                    >
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Need help choosing?</h3>
        <p className="text-gray-600 mb-4">
          Compare flight times, amenities, and prices to find the perfect option for your trip.
        </p>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View flight comparison tool →
        </button>
      </div>
    </div>
  );
}