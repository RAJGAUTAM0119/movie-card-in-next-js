// Define the API key as a constant to avoid hardcoding in multiple places
const TMDB_API_KEY = "0f36ab1e3d21cd146ef813339a23571b";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Interface for API endpoint configuration
interface ApiEndpoint {
  id: number; // Unique identifier for the endpoint
  name: string; // Descriptive name for the endpoint (e.g., "Upcoming Movies")
  url: string; // Full API URL
}

// List of TMDB API endpoints
export const apiEndpoints: ApiEndpoint[] = [
  {
    id: 1,
    name: "Upcoming Movies",
    url: `${TMDB_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&page=2`,
  },
  {
    id: 2,
    name: "Now Playing Movies",
    url: `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`,
  },
  {
    id: 3,
    name: "Popular Movies",
    url: `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
  },
  {
    id: 4,
    name: "Top Rated Movies",
    url: `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`,
  },
  {
    id: 5,
    name: "Trending Movies (Daily)",
    url: `${TMDB_BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}`,
  },
  {
    id: 6,
    name: "Animated Movies",
    url: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16`,
  },
];
