import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PopularDestinations() {
  const destinations = [
    {
      name: 'Paris',
      country: 'France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=300',
      properties: 5420,
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=300',
      properties: 3892,
    },
    {
      name: 'New York',
      country: 'USA',
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=300',
      properties: 6127,
    },
    {
      name: 'London',
      country: 'UK',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300',
      properties: 4783,
    },
     {
      name: 'Paris',
      country: 'France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=300',
      properties: 5420,
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=300',
      properties: 3892,
    },
    {
      name: 'New York',
      country: 'USA',
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=300',
      properties: 6127,
    },
    {
      name: 'London',
      country: 'UK',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300',
      properties: 4783,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Popular Destinations</h3>
        <ArrowRight className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                {destination.name}
              </h4>
              <p className="text-sm text-gray-600">
                {destination.country} • {destination.properties.toLocaleString()} properties
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}