package com.example.counter2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.res.Configuration;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
public int counter1;
public int counter2;
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
        if(newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE){
            counter1++;
            couter1Text.setText(String.valueOf(counter1));
        }else if(newConfig.orientation == Configuration.ORIENTATION_PORTRAIT){
            counter2++;
            couter2Text.setText(String.valueOf(counter2));
        }
    }
}