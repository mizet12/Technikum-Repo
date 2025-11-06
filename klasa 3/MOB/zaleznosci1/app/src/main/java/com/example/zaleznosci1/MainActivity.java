package com.example.zaleznosci1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LinearLayout layout = new LinearLayout(this);

        layout.setOrientation(LinearLayout.VERTICAL);

        for(int i =0; i < 7; i++){
            TextView napis = new TextView(this);
            int random = (int)(Math.random() * (99 - 1) + 1);
            String tekst = getResources().getQuantityString(R.plurals.sztuki, random, random);
            napis.setText(tekst);
            layout.addView(napis);
   }
        setContentView(layout);

    }
}