package de.judev.vokabeltrainer

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView
import de.judev.vokabeltrainer.fragments.CameraFragment
import de.judev.vokabeltrainer.fragments.SettingsFragment
import de.judev.vokabeltrainer.fragments.VocabularySetsFragment

class MainActivity : AppCompatActivity() {

    private lateinit var bottomNavigation: BottomNavigationView

    private val cameraFragment = CameraFragment()
    private val vocabularySetsFragment = VocabularySetsFragment()
    private val settingsFragment = SettingsFragment()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        replaceFragment(vocabularySetsFragment)

        bottomNavigation = findViewById(R.id.bottom_navigation)

        bottomNavigation.setOnItemSelectedListener {
            when (it.itemId) {
                R.id.ic_camera -> replaceFragment(cameraFragment)
                R.id.ic_view_list -> replaceFragment(vocabularySetsFragment)
                R.id.ic_settings -> replaceFragment(settingsFragment)
            }
            true
        }
    }

    private fun replaceFragment(fragment: Fragment) {
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.fragment_container, fragment)
        transaction.commit()
    }
}