package de.judev.vokabeltrainer.database

import androidx.room.Database
import androidx.room.RoomDatabase
import de.judev.vokabeltrainer.database.dao.UserDao
import de.judev.vokabeltrainer.database.entities.User

@Database(entities = [User::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
}