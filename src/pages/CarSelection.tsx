import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Users, Fuel, Settings, Star, Shield } from 'lucide-react';

export default function CarSelection() {
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  const cars = [
    {
      id: 'compact-1',
      name: 'Toyota Corolla',
      category: 'Compact',
      passengers: 5,
      bags: 2,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      price: 45,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Air Conditioning', 'Bluetooth', 'USB Ports'],
      rating: 4.3,
      supplier: 'Enterprise',
    },
    {
      id: 'suv-1',
      name: 'Ford Explorer',
      category: 'SUV',
      passengers: 7,
      bags: 4,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      price: 89,
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4WD', 'GPS Navigation', 'Premium Audio'],
      rating: 4.6,
      supplier: 'Hertz',
    },
    {
      id: 'luxury-1',
      name: 'BMW 3 Series',
      category: 'Luxury',
      passengers: 5,
      bags: 3,
      transmission: 'Automatic',
      fuel: 'Premium',
      price: 125,
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Leather Seats', 'Premium Sound', 'Sunroof'],
      rating: 4.8,
      supplier: 'Avis',
    },
      {
      id: 'compact-1',
      name: 'Toyota Corolla',
      category: 'Compact',
      passengers: 5,
      bags: 2,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      price: 45,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Air Conditioning', 'Bluetooth', 'USB Ports'],
      rating: 4.3,
      supplier: 'Enterprise',
    },
    {
      id: 'suv-1',
      name: 'Ford Explorer',
      category: 'SUV',
      passengers: 7,
      bags: 4,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      price: 89,
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4WD', 'GPS Navigation', 'Premium Audio'],
      rating: 4.6,
      supplier: 'Hertz',
    },
    {
      id: 'luxury-1',
      name: 'BMW 3 Series',
      category: 'Luxury',
      passengers: 5,
      bags: 3,
      transmission: 'Automatic',
      fuel: 'Premium',
      price: 125,
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Leather Seats', 'Premium Sound', 'Sunroof'],
      rating: 4.8,
      supplier: 'Avis',
    },
  ];

  const handleBookCar = (carId: string) => {
    navigate(`/booking/car/${carId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Your Car</h1>
        <p className="text-gray-600">Los Angeles Airport • March 15-20, 2025 • 5 days</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className={`bg-white rounded-xl shadow-md border-2 transition-all duration-200 hover:shadow-lg ${
              selectedCar === car.id ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                {car.category}
              </div>
              <div className="absolute top-4 right-4 flex items-center bg-white px-2 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{car.rating}</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                <p className="text-sm text-gray-600">or similar • {car.supplier}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {car.passengers} passengers
                </div>
                <div className="flex items-center text-gray-600">
                  <Car className="w-4 h-4 mr-2" />
                  {car.bags} bags
                </div>
                <div className="flex items-center text-gray-600">
                  <Settings className="w-4 h-4 mr-2" />
                  {car.transmission}
                </div>
                <div className="flex items-center text-gray-600">
                  <Fuel className="w-4 h-4 mr-2" />
                  {car.fuel}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Features</h4>
                <div className="flex flex-wrap gap-1">
                  {car.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">${car.price}</div>
                  <div className="text-sm text-gray-600">per day</div>
                </div>
                <div className="flex items-center text-green-600 text-sm">
                  <Shield className="w-4 h-4 mr-1" />
                  Free cancellation
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCar(selectedCar === car.id ? null : car.id)}
                  className={`w-full py-2 border rounded-lg transition-colors ${
                    selectedCar === car.id
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-blue-600'
                  }`}
                >
                  {selectedCar === car.id ? 'Selected' : 'Select Car'}
                </button>
                <button
                  onClick={() => handleBookCar(car.id)}
                  className="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Why book with us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">Free Cancellation</h4>
            <p className="text-sm text-gray-600">Cancel up to 24 hours before pickup</p>
          </div>
          <div className="text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">Best Price Guarantee</h4>
            <p className="text-sm text-gray-600">We'll match any lower price you find</p>
          </div>
          <div className="text-center">
            <Car className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">Premium Fleet</h4>
            <p className="text-sm text-gray-600">Well-maintained, modern vehicles</p>
          </div>
        </div>
      </div>
    </div>
  );
}