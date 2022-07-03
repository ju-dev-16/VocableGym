package de.judev.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import de.judev.backend.models.AppUser;
import de.judev.backend.repository.AppUserRepo;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AppUserService {
    
    private final AppUserRepo repo;

    public List<AppUser> getAllUsers() {
        return repo.findAll();
    }

    public Optional<AppUser> getUserById(Long id) {
        return repo.findById(id);
    }
}