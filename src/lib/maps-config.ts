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
    clubs: 25,
    description: 'Capital city with active Radical Football community'
  },
  {
    id: 2,
    name: 'Cluj-Napoca',
    position: { lat: 46.7712, lng: 23.6236 },
    clubs: 15,
    description: 'Transylvania hub for youth football development'
  },
  {
    id: 3,
    name: 'Timișoara',
    position: { lat: 45.7475, lng: 21.2257 },
    clubs: 12,
    description: 'Western Romania community with growing presence'
  },
  {
    id: 4,
    name: 'Oradea',
    position: { lat: 47.0722, lng: 21.9217 },
    clubs: 18,
    description: 'Home of Radical Football headquarters'
  },
  {
    id: 5,
    name: 'Constanța',
    position: { lat: 44.1733, lng: 28.6383 },
    clubs: 8,
    description: 'Black Sea coast community'
  }
];
