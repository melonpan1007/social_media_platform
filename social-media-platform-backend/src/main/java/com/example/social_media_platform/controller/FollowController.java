package com.example.social_media_platform.controller;

import com.example.social_media_platform.dto.FollowRequest;
import com.example.social_media_platform.model.Follow;
import com.example.social_media_platform.model.User;
import com.example.social_media_platform.service.FollowService;
import com.example.social_media_platform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/follows")
public class FollowController {

    @Autowired
    private FollowService followService;

    @Autowired
    private UserService userService;

    // Fetch all follow relationships
    @GetMapping
    public ResponseEntity<List<Follow>> getAllFollows() {
        return ResponseEntity.ok(followService.findAll());
    }

    // Create a new follow relationship
    @PostMapping(consumes = "application/json")
    public ResponseEntity<Follow> saveFollow(@RequestBody FollowRequest r) {
        if (r.getFollowerId().equals(r.getFollowedId())) {
            return ResponseEntity.badRequest().build();  // Can't follow yourself
        }

        User follower = userService.findById(r.getFollowerId())
                .orElseThrow(() -> new RuntimeException("Follower not found"));
        User followed = userService.findById(r.getFollowedId())
                .orElseThrow(() -> new RuntimeException("Followed user not found"));

        if (followService.isFollowing(follower, followed)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();  // Already following
        }

        Follow f = new Follow();
        f.setFollower(follower);
        f.setFollowed(followed);

        Follow saved = followService.save(f);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Delete a follow relationship
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFollow(@PathVariable Long id) {
        if (followService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        followService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
