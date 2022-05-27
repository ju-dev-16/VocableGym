package de.judev.vokabeltrainer.database.dao

import androidx.room.Dao
import androidx.room.Query
import de.judev.vokabeltrainer.database.data.VocabularySet

@Dao
interface UserDao {
    @Query("SELECT vocabulary_sets FROM User")
    fun getVocabularySets(): List<VocabularySet>
}