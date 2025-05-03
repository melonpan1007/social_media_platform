'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/auth/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen p-8 bg-gray-100 text-black">
      <h1 className="text-2xl font-bold mb-4">👋 Welcome, {user.username}</h1>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => router.push('/posts/create')}
          className="p-4 bg-white rounded shadow hover:bg-gray-200"
        >
          ✍️ Create Post
        </button>

        <button onClick={() => router.push(`/posts/myposts`)} className="p-4 bg-white rounded shadow hover:bg-gray-200">
        📃 My Posts
        </button>


        <button
          onClick={() => router.push('/users')}
          className="p-4 bg-white rounded shadow hover:bg-gray-200"
        >
          🧍 View All Users
        </button>

        <button
          onClick={() => router.push(`/users/${user.id}`)}
          className="p-4 bg-white rounded shadow hover:bg-gray-200"
        >
          🧾 My Profile
        </button>

        <button
          onClick={() => router.push('/dashboard/feed')}
          className="p-4 bg-white rounded shadow hover:bg-gray-200"
        >
          📢 Feed
        </button>
      </div>
    </div>
  );
}
