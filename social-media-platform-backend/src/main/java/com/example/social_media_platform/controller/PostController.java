package com.example.social_media_platform.controller;

import com.example.social_media_platform.dto.PostDTO;
import com.example.social_media_platform.model.Post;
import com.example.social_media_platform.model.User;
import com.example.social_media_platform.service.PostService;
import com.example.social_media_platform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<PostDTO>> getAllPosts() {
        List<Post> posts = postService.findAll();
        List<PostDTO> postDTOs = new ArrayList<>();

        for (Post post : posts) {
            PostDTO dto = new PostDTO(
                    post.getId(),
                    post.getContent(),
                    post.getAuthor().getId(),
                    post.getAuthor().getUsername() // or getName/email
            );
            postDTOs.add(dto);
        }

        return ResponseEntity.ok(postDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDTO> getPostById(@PathVariable Long id) {
        return postService.findById(id)
                .map(post -> new PostDTO(
                        post.getId(),
                        post.getContent(),
                        post.getAuthor().getId(),
                        post.getAuthor().getUsername()
                ))
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PostDTO> savePost(@RequestBody PostDTO postDTO) {
        User author = userService.findById(postDTO.getAuthorId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        Post post = new Post();
        post.setContent(postDTO.getPostContent());
        post.setAuthor(author);

        Post savedPost = postService.save(post);

        PostDTO savedDTO = new PostDTO(
                savedPost.getId(),
                savedPost.getContent(),
                savedPost.getAuthor().getId(),
                savedPost.getAuthor().getUsername()
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(savedDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        if (postService.findById(id).isPresent()) {
            postService.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PostDTO>> getPostsByAuthor(@PathVariable Long userId) {
        List<Post> posts = postService.findByAuthor(userId);
        List<PostDTO> postDTOs = new ArrayList<>();

        for (Post post : posts) {
            postDTOs.add(new PostDTO(
                    post.getId(),
                    post.getContent(),
                    post.getAuthor().getId(),
                    post.getAuthor().getUsername()
            ));
        }

        return ResponseEntity.ok(postDTOs);
    }

    @GetMapping("/top/{n}")
    public ResponseEntity<List<PostDTO>> getTopPosts(@PathVariable int n) {
        List<Post> posts = postService.getTopPosts(n);
        List<PostDTO> postDTOs = new ArrayList<>();

        for (Post post : posts) {
            postDTOs.add(new PostDTO(
                    post.getId(),
                    post.getContent(),
                    post.getAuthor().getId(),
                    post.getAuthor().getUsername()
            ));
        }

        return ResponseEntity.ok(postDTOs);
    }
}
