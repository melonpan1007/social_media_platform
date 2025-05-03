// src/app/dashboard/feed/page.tsx
'use client';

import { useEffect, useState } from 'react';

interface Post {
  postId: number;
  postContent: string;
  authorId: number;
}

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:8080/posts');
        const data = await res.json();
        setPosts(data.reverse());
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">📰 Global Feed</h1>

      {loading ? (
        <p className="text-center">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center">No posts available.</p>
      ) : (
        <div className="grid gap-4 max-w-xl mx-auto">
          {posts.map((post) => (
            <div key={post.postId} className="border p-4 rounded shadow-sm">
              <p className="text-sm text-gray-600">👤 User ID: {post.authorId}</p>
              <p className="text-lg">{post.postContent}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
