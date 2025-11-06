package com.example.counter1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.res.Configuration;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    public int counter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView counterTextView = findViewById(R.id.counter);
        counterTextView.setText(String.valueOf(counter));
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig){
        super.onConfigurationChanged(newConfig);
        counter++;

        TextView counterTextView = findViewById(R.id.counter);
        counterTextView.setText(String.valueOf(counter));
    }
}