package de.judev.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import de.judev.backend.data.VocabularySet;
import lombok.Data;

@Data
@Document
public class AppUser {
    @Id
    private Long id;
    private List<VocabularySet> vocabularySets;

    public AppUser(List<VocabularySet> vocabularySets) {
        this.vocabularySets = vocabularySets;
    }
}