import React from 'react';
import { Percent, Clock } from 'lucide-react';

export default function TravelOffers() {
  const offers = [
    {
      title: 'Save 15% on your next booking',
      description: 'Members get exclusive discounts',
      discount: '15% OFF',
      color: 'bg-green-500',
    },
    {
      title: 'Last-minute deals',
      description: 'Book within 24 hours and save',
      discount: 'UP TO 30%',
      color: 'bg-orange-500',
    },
    {
      title: 'Extended stays',
      description: '7+ nights get extra savings',
      discount: '20% OFF',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center mb-4">
        <Percent className="w-5 h-5 text-orange-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">Special Offers</h3>
      </div>
      
      <div className="space-y-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative p-4 rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition-all group overflow-hidden"
          >
            <div className={`absolute top-0 right-0 ${offer.color} text-white px-3 py-1 text-xs font-bold rounded-bl-lg`}>
              {offer.discount}
            </div>
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 pr-16">
              {offer.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              Limited time offer
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}