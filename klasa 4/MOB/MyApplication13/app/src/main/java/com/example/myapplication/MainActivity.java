package com.example.myapplication;

import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.Random;

public class MainActivity extends AppCompatActivity {
    Button but;
    ImageView image;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        but = findViewById(R.id.button);
        image = findViewById(R.id.imageView);
        Random rand = new Random();
        Drawable tab[] = {getResources().getDrawable(R.drawable.d1), getResources().getDrawable(R.drawable.d2), getResources().getDrawable(R.drawable.d3), getResources().getDrawable(R.drawable.d4), getResources().getDrawable(R.drawable.d5), getResources().getDrawable(R.drawable.d6)};



        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                image.setImageDrawable(tab[rand.nextInt(6)]);
            }
        });
    }
}