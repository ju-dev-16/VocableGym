package de.judev.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import de.judev.backend.model.AppUser;

public interface AppUserRepo extends MongoRepository<AppUser, Integer>  {

    Optional<AppUser> findUserById(String id);
    void deleteUserById(String id);
}