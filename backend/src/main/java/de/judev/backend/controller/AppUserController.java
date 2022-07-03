package de.judev.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import de.judev.backend.model.AppUser;
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

    @GetMapping("/get")
    @ResponseBody
    public Optional<AppUser> getUserById(@RequestParam Long id) {
        return service.getUserById(id);
    }

    @PostMapping("/save")
    public void saveUser(@RequestBody AppUser user) {
        service.saveUser(user);
    }

    @PatchMapping("/update")
    public void instertUser(@RequestBody AppUser user) {
        service.insertUser(user);
    }

    @DeleteMapping("/delete")
    @ResponseBody
    public void deleteUser(@RequestParam Long id) {
        service.deleteUserById(id);
    }
}