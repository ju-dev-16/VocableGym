package de.judev.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import de.judev.backend.data.VocabularySet;
import lombok.Data;

@Data
@Document(collection = "users")
public class AppUser {
    @Id
    private String id;
    private List<VocabularySet> vocabularySets;

    public AppUser(@JsonProperty("vocabularySets") List<VocabularySet> vocabularySets) {
        this.vocabularySets = vocabularySets;
    }
}