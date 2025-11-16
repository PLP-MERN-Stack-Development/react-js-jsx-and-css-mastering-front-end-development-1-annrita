import { useEffect, useState } from "react";
import { fetchPosts } from "@/lib/api";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Fetch posts whenever page or search changes
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPosts({ limit: 5, page, search });
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page, search]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset to first page on search
        }}
        className="mb-4 px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform focus:scale-105"
      />

      {/* Loading and error states */}
      {loading && <p className="animate-pulse text-gray-500">Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Posts list */}
      <ul className="space-y-3">
        {!loading && posts.length === 0 && <li>No posts found</li>}
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
          >
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="mt-1">{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="mt-4 flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded transition-transform duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded transition-transform duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
}
