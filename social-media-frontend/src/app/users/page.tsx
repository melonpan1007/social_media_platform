'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // ✅ added for "My Profile" link

type UserProfileDTO = {
  id: number;
  username: string;
  email: string;
  followers: any[];
  following: any[];
  roles: string[];
};

type Follow = {
  id: number;
  follower: { id: number };
  followed: { id: number };
};

export default function UsersPage() {
  const [users, setUsers] = useState<UserProfileDTO[]>([]);
  const [follows, setFollows] = useState<Follow[]>([]);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setCurrentUserId(user.id);
        }

        const [usersRes, followsRes] = await Promise.all([
          fetch('http://localhost:8080/users').then((res) => res.json()),
          fetch('http://localhost:8080/follows').then((res) => res.json()),
        ]);

        console.log('Users loaded:', usersRes);
        console.log('Follows loaded:', followsRes);

        setUsers(usersRes);
        setFollows(Array.isArray(followsRes) ? followsRes : []);
      } catch (err: any) {
        console.error('Fetch error:', err);
        setError('Failed to load users');
        setFollows([]); // fallback to empty array to avoid .some error
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const isFollowing = (userId: number): boolean => {
    if (!Array.isArray(follows)) return false;
    return follows.some(
      (f) => f.follower.id === currentUserId && f.followed.id === userId
    );
  };

  const getFollowId = (userId: number): number | null => {
    if (!Array.isArray(follows)) return null;
    const follow = follows.find(
      (f) => f.follower.id === currentUserId && f.followed.id === userId
    );
    return follow ? follow.id : null;
  };

  const handleFollow = async (followedId: number) => {
    try {
      const response = await fetch('http://localhost:8080/follows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ followerId: currentUserId, followedId }),
      });
      if (!response.ok) throw new Error('Failed to follow user');

      const newFollow = await response.json();
      setFollows((prev) => [...prev, newFollow]);
    } catch (err) {
      console.error('Follow failed:', err);
      alert('Failed to follow user');
    }
  };

  const handleUnfollow = async (followedId: number) => {
    const followId = getFollowId(followedId);
    if (!followId) return;

    try {
      const response = await fetch(`http://localhost:8080/follows/${followId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to unfollow user');

      setFollows((prev) => prev.filter((f) => f.id !== followId));
    } catch (err) {
      console.error('Unfollow failed:', err);
      alert('Failed to unfollow user');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Users</h1>
        {currentUserId && (
          <Link href={`/users/${currentUserId}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              My Profile
            </button>
          </Link>
        )}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-4">
          {users
            .filter((user) => user.id !== currentUserId)
            .map((user) => (
              <li key={user.id} className="border p-4 rounded shadow">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Followers:</strong> {user.followers.length}</p>
                <p><strong>Following:</strong> {user.following.length}</p>
                <p><strong>Roles:</strong> {user.roles.join(', ')}</p>

                <div className="mt-2">
                  {isFollowing(user.id) ? (
                    <button
                      onClick={() => handleUnfollow(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => handleFollow(user.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Follow
                    </button>
                  )}
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
