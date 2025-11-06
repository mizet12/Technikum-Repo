package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LinearLayout layout = new LinearLayout(this);

        layout.setOrientation(LinearLayout.VERTICAL);

        // losowanie koloru bazowego
        int baseColor = Color.rgb((int)(Math.random() * 256), (int)(Math.random() * 256), (int)(Math.random() * 256));

        // dodawanie tekstu do layoutu
        for(int i = 0; i < 7; i++){
            TextView napis = new TextView(this);
            int random = (int)(Math.random() * (99 - 1) + 1);

            // obliczanie różnicy między wylosowaną liczbą a pierwszą wylosowaną wartością
            int diff = Math.abs(random - 1);

            // obliczanie nowego koloru na podstawie koloru bazowego i różnicy
            int red = (int)(Color.red(baseColor) + diff * 0.5);
            int green = (int)(Color.green(baseColor) + diff * 0.5);
            int blue = (int)(Color.blue(baseColor) + diff * 0.5);

            // ustawienie nowego koloru tekstu
            napis.setTextColor(Color.rgb(red, green, blue));

            String tekst = getResources().getQuantityString(R.plurals.sztuki, random, random);
            napis.setText(tekst);
            layout.addView(napis);
        }
        setContentView(layout);
    }
}