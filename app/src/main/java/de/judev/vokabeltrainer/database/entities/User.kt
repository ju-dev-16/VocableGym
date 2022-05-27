package de.judev.vokabeltrainer.database.entities

import androidx.room.ColumnInfo
import androidx.room.Entity
import de.judev.vokabeltrainer.database.data.VocabularySet

@Entity
data class User(@ColumnInfo(name="vocabulary_sets") val vocabularySets: List<VocabularySet>)