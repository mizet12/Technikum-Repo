package com.example.throwdice2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.res.Configuration;
import android.os.Bundle;
import android.widget.TextView;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    public TextView couter2Text;
    public TextView couter1Text;
    public TextView previousRolls;
    public int poprzednie = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        couter1Text = findViewById(R.id.counter1);
        couter2Text = findViewById(R.id.counter2);
        previousRolls = findViewById(R.id.wartosci);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig){
        super.onConfigurationChanged(newConfig);
        Random r = new Random();
        int a = r.nextInt((6-1)+1);
        int b = r.nextInt((6-1)+1);
        poprzednie += a ;
        poprzednie += b;
        couter1Text.setText(String.valueOf(a));
        couter2Text.setText(String.valueOf(b));
        previousRolls.setText("Suma poprzednich wartosci: " + poprzednie);

    }
}