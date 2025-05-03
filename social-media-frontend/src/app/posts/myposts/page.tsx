// src/app/posts/myposts/page.tsx
'use client';

import { useEffect, useState } from 'react';

interface Post {
  postId: number;
  postContent: string;
  authorId: number;
}

export default function MyPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) return;
    
    const userId = JSON.parse(user).id;
    console.log("Loaded userId from localStorage:", userId);

    fetch(`http://localhost:8080/posts/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched user posts:", data);
        setPosts(data.reverse()); // newest first
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading posts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">📝 My Posts</h1>

      {loading ? (
        <p className="text-center">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center">No posts yet!</p>
      ) : (
        <div className="grid gap-4 max-w-xl mx-auto">
          {posts.map((post) => (
            <div key={post.postId} className="border p-4 rounded shadow-sm">
              <p className="text-sm text-gray-600">🆔 Post ID: {post.postId}</p>
              <p className="text-lg">{post.postContent}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
