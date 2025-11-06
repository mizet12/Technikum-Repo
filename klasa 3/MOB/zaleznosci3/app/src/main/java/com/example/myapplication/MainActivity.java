package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.content.res.TypedArray;
import android.os.Bundle;

import android.widget.LinearLayout;
import android.widget.TextView;
import java.util.Random;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LinearLayout layout = new LinearLayout(this);

        layout.setOrientation(LinearLayout.VERTICAL);
        for(int i =0; i < 7; i++){
            TypedArray colors = getResources().obtainTypedArray(R.array.random_colors);
            int randomColor = colors.getResourceId((int) (Math.random() * colors.length()), 0);

            TextView napis = new TextView(this);
            int random = (int)(Math.random() * (99 - 1) + 1);
            String tekst = getResources().getQuantityString(R.plurals.sztuki, random, random);
            napis.setText(tekst);
            napis.setTextColor(ContextCompat.getColor(this, randomColor));
            layout.addView(napis);
        }
        setContentView(layout);

    }
}