package de.judev.backend.data;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class VocabularySet {
    private String name;
    private List<Vocabulary> vocabularies;
    private LocalDateTime created = LocalDateTime.now();

    public VocabularySet(String name, List<Vocabulary> vocabularies) {
        this.name = name;
        this.vocabularies = vocabularies;
    }
}