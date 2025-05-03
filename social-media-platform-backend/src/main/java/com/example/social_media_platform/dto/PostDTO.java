package com.example.social_media_platform.dto;

public class PostDTO {
    private Long postId;          // Post ID
    private String postContent;   // Post content
    private Long authorId;        // Author ID
    private String authorName;    // Author Name (new)

    // Getters and Setters
    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getPostContent() {
        return postContent;
    }

    public void setPostContent(String postContent) {
        this.postContent = postContent;
    }

    public Long getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Long authorId) {
        this.authorId = authorId;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    // Constructor
    public PostDTO(Long postId, String postContent, Long authorId, String authorName) {
        this.postId = postId;
        this.postContent = postContent;
        this.authorId = authorId;
        this.authorName = authorName;
    }

    // Default constructor
    public PostDTO() {}
}
