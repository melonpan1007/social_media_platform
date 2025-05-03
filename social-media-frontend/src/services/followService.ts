// services/followService.ts
export type Follow = {
    id: number;
    follower: { id: number };
    followed: { id: number };
  };
  
  export async function fetchFollows(): Promise<Follow[]> {
    const res = await fetch("http://localhost:8080/follows");
    if (!res.ok) throw new Error("Failed to load follows");
    return res.json();
  }
  
  export async function createFollow(followerId: number, followedId: number): Promise<Follow> {
    const res = await fetch("http://localhost:8080/follows", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ followerId, followedId }),
    });
    if (!res.ok) throw new Error(`Follow failed: HTTP ${res.status}`);
    return res.json();
  }
  
  export async function deleteFollow(followId: number): Promise<void> {
    const res = await fetch(`http://localhost:8080/follows/${followId}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`Unfollow failed: HTTP ${res.status}`);
  }
  