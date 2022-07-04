package de.judev.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import de.judev.backend.model.AppUser;
import de.judev.backend.repository.AppUserRepo;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AppUserService {
    
    private final AppUserRepo repo;

    public List<AppUser> getAllUsers() {
        return repo.findAll();
    }

    public Optional<AppUser> getUserById(String id) {
        return repo.findUserById(id);
    }

    public void insertUser(AppUser user) {
        repo.insert(user);
    }

    public void saveUser(AppUser user) {
        repo.save(user);
    }

    public void deleteUserById(String id) {
        repo.deleteUserById(id);
    }
}