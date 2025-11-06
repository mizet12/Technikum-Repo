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

public class MainActivity extends AppCompatActivity {
    TextView text1, text2;
    SeekBar slider;
    Button but;
    int i = 0;
    String[] tab = {"Dzień dobry", "Good morning", "Buenos Dias"};
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        text1 = findViewById(R.id.textView);
        text2 = findViewById(R.id.textView2);
        slider = findViewById(R.id.seekBar);
        but = findViewById(R.id.button);

        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                text1.setText(String.valueOf(slider.getProgress()));
                text2.setText(tab[i]);
                if(i < 2){
                    i++;
                }else{
                    i = 0;
                }
            }
        });
    }
}