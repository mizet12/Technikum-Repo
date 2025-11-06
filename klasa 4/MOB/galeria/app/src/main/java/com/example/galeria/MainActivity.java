package com.example.galeria;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Switch;

public class MainActivity extends AppCompatActivity {
    Button next, prev;
    Switch color;
    ImageView image;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        image = findViewById(R.id.imageView);
        next = findViewById(R.id.button2);
        prev = findViewById(R.id.button);

        image.setImageDrawable(getResources().getDrawable(R.drawable.kot1));
    }
}