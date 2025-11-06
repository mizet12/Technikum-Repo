package com.example.busy4;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.Handler;
import android.os.SystemClock;
import android.widget.TextView;

import org.w3c.dom.Text;

public class MainActivity extends AppCompatActivity {

    Handler handler;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        handler = new Handler();
        findViewById(R.id.but).setOnClickListener((v) -> {
            TextView text = findViewById(R.id.mess);
            text.setText("start");
            Thread thread = new Thread(){
                @Override
                public void run() {
                    for (int i = 1; i <= 10; i++){
                        SystemClock.sleep(1000);
                        final int j = i;
                        handler.post(new Runnable() {
                            @Override
                            public void run() {
                                TextView text = findViewById(R.id.mess);
                                if(j == 10){
                                    text.setText("Zakonczono w pelni");
                                }else{
                                    text.setText(String.format( "End: %d%%", j*10));
                                }

                            }
                        });
                    }
                }
            };
            thread.start();
        });
    }
}