package de.judev.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import de.judev.backend.models.AppUser;
import de.judev.backend.service.AppUserService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/v1/users")
@AllArgsConstructor
public class AppUserController {
 
    private final AppUserService service;

    @GetMapping
    public List<AppUser> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("id")
    @ResponseBody
    public Optional<AppUser> getUserById(@RequestParam Long id) {
        return service.getUserById(id);
    }
}