package de.judev.backend.data;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AppUserRequest {
    private String id;
    private Integer row;
    private String vocabularySetName;
    private List<Vocabulary> vocabularies;
}