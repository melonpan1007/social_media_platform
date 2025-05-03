'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchFollows, createFollow, deleteFollow, Follow } from '@/services/followService';

type UserProfileDTO = {
  id: number;
  username: string;
  email: string;
  followers: { id: number }[];
  following: { id: number }[];
  roles: string[];
};

export default function UserProfilePage() {
  const { id } = useParams();
  const uid = Number(id);

  const [profile, setProfile] = useState<UserProfileDTO|null>(null);
  const [follows, setFollows] = useState<Follow[]>([]);
  const [currentUserId, setCurrentUserId] = useState<number|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const stored = localStorage.getItem('user');
        if (stored) setCurrentUserId(JSON.parse(stored).id);

        const [u] = await Promise.all([
          fetch(`http://localhost:8080/users/${uid}`).then(r => {
            if (!r.ok) throw new Error('User not found');
            return r.json() as Promise<UserProfileDTO>;
          }),
          fetchFollows(),
        ]);
        setProfile(u);
        setFollows(await fetchFollows());
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [uid]);

  const isFollowing = () =>
    follows.some(f => f.follower.id === currentUserId && f.followed.id === uid);

  const getFollowId = () => {
    const f = follows.find(x => x.follower.id === currentUserId && x.followed.id === uid);
    return f ? f.id : null;
  };

  const handleFollow = async () => {
    try {
      await createFollow(currentUserId!, uid);
      setProfile(p => p && { ...p, followers: [...p.followers, { id: currentUserId! }] });
    } catch {}
  };
  const handleUnfollow = async () => {
    const fid = getFollowId();
    if (!fid) return;
    try {
      await deleteFollow(fid);
      setProfile(p => p && {
        ...p,
        followers: p.followers.filter(f => f.id !== currentUserId)
      });
    } catch {}
  };

  if (loading) return <p>Loading profile…</p>;
  if (!profile) return <p>User not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile: {profile.username}</h1>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Followers:</strong> {profile.followers.length}</p>
      <p><strong>Following:</strong> {profile.following.length}</p>
      <p><strong>Roles:</strong> {profile.roles.join(', ')}</p>

      {currentUserId !== profile.id && (
        <div className="mt-4">
          {isFollowing() ? (
            <button
              onClick={handleUnfollow}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={handleFollow}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Follow
            </button>
          )}
        </div>
      )}
    </div>
  );
}
