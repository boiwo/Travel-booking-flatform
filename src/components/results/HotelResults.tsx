import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Wifi, Car, Coffee } from 'lucide-react';

export default function HotelResults() {
  const navigate = useNavigate();

  const hotels = [
    {
      id: 1,
      name: 'Grand Palace Hotel',
      location: 'Downtown District',
      rating: 4.8,
      reviews: 2847,
      price: 299,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['Free WiFi', 'Parking', 'Restaurant'],
    },
    {
      id: 2,
      name: 'Ocean View Resort',
      location: 'Beachfront Area',
      rating: 4.6,
      reviews: 1923,
      price: 425,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['Ocean View', 'Pool', 'Spa'],
    },
    {
      id: 3,
      name: 'City Center Boutique',
      location: 'Business District',
      rating: 4.7,
      reviews: 1456,
      price: 189,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['Free WiFi', 'Gym', 'Business Center'],
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'free wifi':
        return <Wifi className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'restaurant':
      case 'spa':
      case 'gym':
      case 'business center':
        return <Coffee className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  const handleBookHotel = (hotelId: number) => {
    navigate(`/booking/hotel/${hotelId}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Featured Properties
        </h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">{hotels.length} properties found</span>
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Sort by: Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">${hotel.price}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {hotel.rating}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {hotel.reviews} reviews
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    View details
                  </button>
                  <button
                    onClick={() => handleBookHotel(hotel.id)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}