package com.example.myapplication;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.SeekBar;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity4 extends AppCompatActivity {
    Button but;
    SeekBar seek;
    TextView text;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main4);

        but = findViewById(R.id.button6);
        seek = findViewById(R.id.seekBar);
        text = findViewById(R.id.textView3);

        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                text.setText(String.valueOf(seek.getProgress()));
            }
        });
    }
}