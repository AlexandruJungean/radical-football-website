'use client';

import { useState, useEffect } from 'react';
import { HiUserGroup, HiLocationMarker } from 'react-icons/hi';
import { HiMapPin } from 'react-icons/hi2';
import { COMMUNITY_LOCATIONS, MAP_CONFIG } from '@/lib/maps-config';

interface CommunityMapProps {
  className?: string;
}

const CommunityMap = ({ className = '' }: CommunityMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<typeof COMMUNITY_LOCATIONS[0] | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Initialize map when component mounts
    setIsMapLoaded(true);
  }, []);

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="text-3xl">🌍</div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-primary)]">Community Map</h2>
          <p className="text-gray-600">Find Radical Football communities near you</p>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-6">
        {isMapLoaded ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <HiMapPin className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Interactive map loading...</p>
              <p className="text-sm text-gray-500">
                Google Maps integration coming soon
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-accent)] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      {/* Community Locations List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
          Active Communities
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMMUNITY_LOCATIONS.map((location) => (
            <div
              key={location.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                selectedLocation?.id === location.id
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5'
                  : 'border-gray-200 hover:border-[var(--color-primary)]/30 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <HiLocationMarker className="w-4 h-4 text-[var(--color-accent)]" />
                    <h4 className="font-semibold text-gray-900">{location.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                  <div className="flex items-center gap-2">
                    <HiUserGroup className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-sm font-medium text-[var(--color-accent)]">
                      {location.clubs} clubs
                    </span>
                  </div>
                </div>
                {selectedLocation?.id === location.id && (
                  <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <div className="mt-6 p-4 bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-lg">
          <h4 className="font-semibold text-[var(--color-primary)] mb-2">
            {selectedLocation.name}
          </h4>
          <p className="text-sm text-gray-700 mb-3">{selectedLocation.description}</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <HiUserGroup className="w-4 h-4 text-[var(--color-accent)]" />
              <span className="font-medium">{selectedLocation.clubs} active clubs</span>
            </span>
            <button className="text-[var(--color-accent)] hover:underline font-medium">
              View details →
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-6 p-4 bg-[var(--color-accent)]/10 rounded-lg text-center">
        <p className="text-sm text-gray-700 mb-2">
          Don't see your community on the map?
        </p>
        <button className="text-[var(--color-accent)] font-semibold hover:underline">
          Join the Radical Football movement
        </button>
      </div>
    </div>
  );
};

export default CommunityMap;
