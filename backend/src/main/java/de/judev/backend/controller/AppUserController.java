package de.judev.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import de.judev.backend.data.AppUserRequest;
import de.judev.backend.model.AppUser;
import de.judev.backend.service.AppUserService;
import lombok.AllArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
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
    public Optional<AppUser> getUserById(@RequestParam String id) {
        return service.getUserById(id);
    }

    @PostMapping("/insert")
    public void insertUser(@RequestBody AppUser user) {
        service.insertUser(user);
    }

    @PutMapping("/save")
    public void saveUser(@RequestBody AppUser AppUser) {
        AppUser user = service.getUserById(AppUser.getId()).get();

        user.setVocabularySets(AppUser.getVocabularySets());

        service.saveUser(user);
    }

    @PutMapping("/save-vocabulary-set")
    public void saveUserVocabularySet(@RequestBody AppUserRequest userRequest) {
        AppUser user = service.getUserById(userRequest.getId()).get();
        
        user.getVocabularySets().get(userRequest.getRow()).setName(userRequest.getVocabularySetName());

        for (int i = 0; i < userRequest.getVocabularies().size(); i++) {
            user.getVocabularySets().get(userRequest.getRow()).getVocabularies().add(userRequest.getVocabularies().get(i));
        }
        
        service.saveUser(user);
    }

    @DeleteMapping("/delete")
    @ResponseBody
    public void deleteUser(@RequestParam String id) {
        service.deleteUserById(id);
    }
}