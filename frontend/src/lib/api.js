// Base URL from .env
const API_URL = "https://jsonplaceholder.typicode.com";

/**
 * Fetch posts with optional pagination & search
 * @param {Object} params
 * @param {number} params.limit - Number of posts per page
 * @param {number} params.page - Page number
 * @param {string} params.search - Search query
 * @returns {Promise<Array>} - Array of posts
 */
export const fetchPosts = async ({ limit = 5, page = 1, search = "" } = {}) => {
  const response = await fetch(
    `${API_URL}/posts?_limit=${limit}&_page=${page}&q=${encodeURIComponent(search)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await response.json();
  return data;
};
