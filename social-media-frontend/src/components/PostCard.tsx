// src/components/PostCard.tsx
import React from "react";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="font-bold text-lg">{post.username}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostCard;
