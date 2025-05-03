'use client';

import { useState, useEffect } from 'react';

export default function CreatePostPage() {
  const [postContent, setPostContent] = useState('');
  const [authorId, setAuthorId] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setAuthorId(parsedUser.id);
      console.log('Logged-in user:', parsedUser);
      console.log('Setting authorId:', parsedUser.id);
    } else {
      setMessage('❌ You must be logged in to post.');
    }
  }, []);

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorId) return;

    const postDTO = { postContent, authorId };
    console.log('POST body:', JSON.stringify(postDTO));

    try {
      const response = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDTO),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Post creation failed');
      }

      setPostContent('');
      setMessage('✅ Post created successfully!');
    } catch (error) {
      console.error('Post error:', error);
      setMessage('❌ Error creating post');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Create a Post</h1>

      <form onSubmit={handlePost} className="w-full max-w-md flex flex-col gap-4">
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind?"
          className="p-2 border border-gray-300 rounded h-40"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
