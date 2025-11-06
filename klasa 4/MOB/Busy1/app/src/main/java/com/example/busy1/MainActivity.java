package com.example.busy1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.SystemClock;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.but).setOnClickListener((v) ->{

                    TextView text = findViewById(R.id.mess);
                    text.setText("Start");

                    SystemClock.sleep(10*200);
                    text.setText("End");


        });
    }
}