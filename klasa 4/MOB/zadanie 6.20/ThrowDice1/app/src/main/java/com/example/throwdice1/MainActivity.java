package com.example.throwdice1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.res.Configuration;
import android.os.Bundle;
import android.widget.TextView;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    public TextView couter2Text;
    public TextView couter1Text;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        couter1Text = findViewById(R.id.counter1);
        couter2Text = findViewById(R.id.counter2);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig){
        super.onConfigurationChanged(newConfig);
        Random r = new Random();
            couter1Text.setText(String.valueOf(r.nextInt(6-1)+1));
            couter2Text.setText(String.valueOf(r.nextInt(6-1)+1));
    }
}