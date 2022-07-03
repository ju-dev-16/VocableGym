package de.judev.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import de.judev.backend.models.AppUser;

public interface AppUserRepo extends MongoRepository<AppUser, Long>  {
    
}