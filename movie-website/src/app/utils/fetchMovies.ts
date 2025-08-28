const baseUrl = '/api/movies';

export async function fetchMovies() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to fetch movies: ${errorData.status_message || response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to fetch movies: ${(error as Error).message}`);
  }
}
