package de.judev.backend.data;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Vocabulary {
    private String foreignWord;
    private String translation;
}