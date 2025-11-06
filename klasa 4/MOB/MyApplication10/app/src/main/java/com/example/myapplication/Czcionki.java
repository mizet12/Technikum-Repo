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

public class Czcionki extends AppCompatActivity {
TextView text1, text2;
SeekBar seek;
Button but;
int count = 0;
String[] tab = {"Good morning", "Buenos Dias!" , "Dzień Dobry"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_czcionki);
        but = findViewById(R.id.button3);
        text1 = findViewById(R.id.textView7);
        text2 = findViewById(R.id.textView8);
        seek = findViewById(R.id.seekBar);

        seek.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                text1.setText("Rozmiar: " + String.valueOf(seek.getProgress()));
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });
        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
             if(count == 0){
                text2.setText(tab[count]);
                 count++;
             }else if(count == 1){
                 text2.setText(tab[count]);
                 count ++;
             }else {
                 text2.setText(tab[count]);
                 count = 0;
             }
            }
        });
    }
}