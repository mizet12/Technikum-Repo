package com.example.zadanie11;

import androidx.appcompat.app.AppCompatActivity;
import android.content.res.Resources;
import android.os.Bundle;
import android.widget.TextView;
import android.util.DisplayMetrics;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Locale deviceLocale = Locale.getDefault();

        boolean lang = deviceLocale.getLanguage().equals("pl");

        Resources res = getResources();

        TextView welcomeTextView = findViewById(R.id.welcomeTextView);
        welcomeTextView.setText(lang ? res.getString(R.string.pl_welcome) : res.getString(R.string.en_welcome));

        DisplayMetrics displayMetrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);

        int widthPixels = displayMetrics.widthPixels;
        int heightPixels = displayMetrics.heightPixels;

        String orientation = "";

        if (widthPixels < heightPixels) {
            orientation = res.getString(lang ? R.string.pl_orientation_portrait : R.string.en_orientation_portrait);
        } else {
            orientation = res.getString(lang ? R.string.pl_orientation_landscape : R.string.en_orientation_landscape);
        }

        TextView orientationTextView = findViewById(R.id.orientationTextView);
        orientationTextView.setText(res.getString(lang ? R.string.pl_orientation : R.string.en_orientation) + " " + orientation);

        TextView randomNumberTextView = findViewById(R.id.randomNumberTextView);
        int randomNum = (int) (Math.random() * 9) + 1;
        randomNumberTextView.setText(res.getString(lang ? R.string.pl_random : R.string.en_random) + " " + Integer.toString(randomNum));

        TextView nameTextView = findViewById(R.id.nameTextView);
        nameTextView.setText(res.getString(lang ? R.string.pl_app_name : R.string.app_name));
    }
}
