import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Star, Users, Calendar, Camera, Ship, Building, Music } from 'lucide-react';

export default function AttractionsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [availability, setAvailability] = useState<{ [key: string]: boolean }>({});

  const categories = [
    { id: 'all', name: 'All Attractions', icon: MapPin },
    { id: 'museums', name: 'Museums', icon: Building },
    { id: 'monuments', name: 'Monuments', icon: Camera },
    { id: 'tours', name: 'Tours', icon: Users },
    { id: 'cruises', name: 'Cruises', icon: Ship },
    { id: 'entertainment', name: 'Entertainment', icon: Music },
  ];

  const attractions = [
    {
      id: 'louvre-1',
      name: 'The Louvre Museum',
      category: 'museums',
      location: 'Paris, France',
      duration: '3-4 hours',
      price: 25,
      rating: 4.8,
      reviews: 15420,
      image: 'https://images.pexels.com/photos/2675266/pexels-photo-2675266.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'World\'s largest art museum with iconic masterpieces',
      highlights: ['Mona Lisa', 'Venus de Milo', 'Egyptian Antiquities'],
    },
    {
      id: 'statue-liberty-1',
      name: 'Statue of Liberty',
      category: 'monuments',
      location: 'New York, USA',
      duration: '2-3 hours',
      price: 35,
      rating: 4.6,
      reviews: 8930,
      image: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Iconic symbol of freedom and democracy',
      highlights: ['Crown Access', 'Ellis Island', 'Harbor Views'],
    },
    {
      id: 'city-tour-1',
      name: 'Historic City Walking Tour',
      category: 'tours',
      location: 'Rome, Italy',
      duration: '4 hours',
      price: 45,
      rating: 4.7,
      reviews: 3240,
      image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Explore ancient Rome with expert local guides',
      highlights: ['Colosseum', 'Roman Forum', 'Pantheon'],
    },
    {
      id: 'sunset-cruise-1',
      name: 'Sunset Harbor Cruise',
      category: 'cruises',
      location: 'San Francisco, USA',
      duration: '2.5 hours',
      price: 65,
      rating: 4.9,
      reviews: 2156,
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Scenic bay cruise with dinner and live music',
      highlights: ['Golden Gate Bridge', 'Alcatraz Views', 'Live Music'],
    },
    {
      id: 'broadway-show-1',
      name: 'Broadway Musical Experience',
      category: 'entertainment',
      location: 'New York, USA',
      duration: '2.5 hours',
      price: 120,
      rating: 4.8,
      reviews: 5670,
      image: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium seats to top-rated Broadway shows',
      highlights: ['Orchestra Seats', 'Pre-show Dinner', 'Meet & Greet'],
    },
    {
      id: 'met-museum-1',
      name: 'Metropolitan Museum',
      category: 'museums',
      location: 'New York, USA',
      duration: '3-5 hours',
      price: 30,
      rating: 4.7,
      reviews: 12340,
      image: 'https://images.unsplash.com/photo-1585429937718-465ea1782365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhpbHNkb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'World-renowned art and cultural artifacts',
      highlights: ['Egyptian Art', 'European Paintings', 'Arms & Armor'],
    },
  ];

  const filteredAttractions = selectedCategory === 'all' 
    ? attractions 
    : attractions.filter(attraction => attraction.category === selectedCategory);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : MapPin;
  };

  const checkAvailability = (attractionId: string) => {
    // Simulate availability check
    setTimeout(() => {
      setAvailability(prev => ({ ...prev, [attractionId]: true }));
    }, 1000);
  };

  const handleBookAttraction = (attractionId: string) => {
    navigate(`/booking/attraction/${attractionId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Attractions & Experiences</h1>
        <p className="text-gray-600">Discover amazing places and unforgettable experiences</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAttractions.map((attraction) => {
          const CategoryIcon = getCategoryIcon(attraction.category);
          return (
            <div
              key={attraction.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center bg-white px-2 py-1 rounded-full">
                  <CategoryIcon className="w-4 h-4 text-blue-600 mr-1" />
                  <span className="text-sm font-medium capitalize">{attraction.category}</span>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{attraction.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{attraction.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{attraction.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{attraction.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {attraction.duration}
                  </div>
                  <span className="text-sm text-gray-500">
                    {attraction.reviews.toLocaleString()} reviews
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Highlights</h4>
                  <div className="space-y-1">
                    {attraction.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xl font-bold text-gray-900">${attraction.price}</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => checkAvailability(attraction.id)}
                    className={`w-full py-2 border rounded-lg transition-colors ${
                      availability[attraction.id]
                        ? 'border-green-600 bg-green-50 text-green-600'
                        : 'border-gray-300 text-gray-700 hover:border-blue-600'
                    }`}
                  >
                    {availability[attraction.id] ? (
                      <div className="flex items-center justify-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Available Today
                      </div>
                    ) : (
                      'Check Availability'
                    )}
                  </button>
                  <button
                    onClick={() => handleBookAttraction(attraction.id)}
                    className="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAttractions.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No attractions found</h3>
          <p className="text-gray-600">Try selecting a different category or location</p>
        </div>
      )}
    </div>
  );
}