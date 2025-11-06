package com.example.busy3;

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
            Thread thread = new Thread(() -> {

                SystemClock.sleep(10 * 1000);

                v.post(new Runnable() {
                    @Override
                    public void run() {
                        TextView text = findViewById(R.id.mess);
                        text.setText("end");
                    }

                });
            });
            thread.start();
        });
    }
}