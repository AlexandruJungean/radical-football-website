// Google Maps Configuration
// Replace with your actual Google Maps API key
export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'your_google_maps_api_key_here';

// Map configuration
export const MAP_CONFIG = {
  defaultCenter: { lat: 46.0669, lng: 23.5933 }, // Romania center
  defaultZoom: 7,
  mapTypeId: 'roadmap',
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ]
};

// Community locations data
export const COMMUNITY_LOCATIONS = [
  {
    id: 1,
    name: 'Bucharest',
    position: { lat: 44.4268, lng: 26.1025 },
    description: 'Capital city with active Radical Football community'
  },
  {
    id: 2,
    name: 'Constanța',
    position: { lat: 44.1733, lng: 28.6383 },
    description: 'Black Sea coast community'
  },
  {
    id: 3,
    name: 'Manchester',
    position: { lat: 53.4808, lng: -2.2426 },
    description: 'Historic football city with passionate community'
  },
  {
    id: 4,
    name: 'Brussels',
    position: { lat: 50.8503, lng: 4.3517 },
    description: 'Belgian capital with diverse football culture'
  },
  {
    id: 5,
    name: 'Antwerp',
    position: { lat: 51.2194, lng: 4.4025 },
    description: 'Flemish city with strong youth development focus'
  }
];
