package com.example.flower;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.RadioButton;

public class MainActivity extends AppCompatActivity {
    String Tag = "MainActivity";
    Button show;
    RadioButton r1, r2, r3;
    int sel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        r1 = findViewById(R.id.radioButton);
        r2 = findViewById(R.id.radioButton2);
        r3 = findViewById(R.id.radioButton3);
        show = findViewById(R.id.button);

        r1.setOnCheckedChangeListener((view, isChecked) ->{
            if (isChecked)
                sel = 1;
        });

        r2.setOnCheckedChangeListener((view, isChecked) -> {
            if (isChecked)
                sel = 2;
        });

        r3.setOnCheckedChangeListener((view, isChecked) -> {
            if (isChecked)
                sel = 3;
        });

        show.setOnClickListener(view -> {
            Intent intent = new Intent(this, flowerActivity.class);
            intent.setAction(Intent.ACTION_SEND);
            intent.putExtra("com.flowerId", sel);
            startActivity(intent);
        });
    }
}