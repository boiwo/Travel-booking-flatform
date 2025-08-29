import React from 'react';
import HotelResults from './results/HotelResults';
import PopularDestinations from './PopularDestinations';
import TravelOffers from './TravelOffers';

export default function SearchResults() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <HotelResults />
        </div>
        <div className="space-y-8">
          <PopularDestinations />
          <TravelOffers />
        </div>
      </div>
    </section>
  );
}