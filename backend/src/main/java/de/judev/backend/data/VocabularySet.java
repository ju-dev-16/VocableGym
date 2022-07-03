package de.judev.backend.data;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class VocabularySet {
    private String name;
    private List<Vocabulary> vocabularies;
    private LocalDateTime created;
}