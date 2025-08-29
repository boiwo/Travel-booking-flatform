import React from 'react';
import { Hotel, Plane, Car, MapPin, Zap } from 'lucide-react';

interface SearchTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function SearchTabs({ activeTab, setActiveTab }: SearchTabsProps) {
  const tabs = [
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'cars', label: 'Car Rental', icon: Car },
    { id: 'attractions', label: 'Attractions', icon: MapPin },
    { id: 'air-taxis', label: 'Air Taxis', icon: Zap },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}