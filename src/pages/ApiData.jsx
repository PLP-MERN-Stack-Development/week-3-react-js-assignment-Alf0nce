import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">API Data</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {loading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}
      {error && <p className="text-red-600 dark:text-red-400">Error: {error}</p>}

      <div className="space-y-4 mb-6">
        {filteredPosts.length === 0 && !loading ? (
          <p className="text-gray-600 dark:text-gray-300">No posts found</p>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="p-4 border rounded-md dark:border-gray-600">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between">
        <Button 
          variant="secondary" 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-gray-600 dark:text-gray-300 self-center">Page {page}</span>
        <Button 
          variant="secondary" 
          onClick={() => setPage(p => p + 1)}
          disabled={posts.length < 10}
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default ApiData;