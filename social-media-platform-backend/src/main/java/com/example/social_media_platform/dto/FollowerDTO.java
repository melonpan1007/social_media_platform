package com.example.social_media_platform.dto;

import com.example.social_media_platform.model.User;

public class FollowerDTO {
    private Long id;
    private String username;

    // existing constructor
    public FollowerDTO(Long id, String username) {
        this.id = id;
        this.username = username;
    }

    // new: accept a User directly
    public FollowerDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
    }

    // getters only
    public Long getId() { return id; }
    public String getUsername() { return username; }
}
