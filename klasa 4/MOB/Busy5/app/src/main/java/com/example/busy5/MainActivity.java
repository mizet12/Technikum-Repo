package com.example.busy5;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.os.SystemClock;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    Handler handler;
    private void updateUI(int j){
        TextView text = findViewById(R.id.mess);
        text.setText(String.format("End: %d%%" + j*10));
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        handler = new Handler(new Handler.Callback() {
            @Override
            public boolean handleMessage(@NonNull Message msg) {
                if (msg.what == 0){
                    updateUI(msg.arg1);
                }
                return false;
            }
        });
        findViewById(R.id.but).setOnClickListener((v) -> {
            TextView text = findViewById(R.id.mess);
            text.setText("Start");
            Thread thread = new Thread(){
                @Override
                public void run(){
                    for(int i = 1; i<= 10; i++){
                        SystemClock.sleep(1000);

                        Message msg = new Message();
                        msg.what = 0;
                        msg.arg1 = i;
                        handler.sendMessage(msg);
                    }
                }
            };
            thread.start();
        });
    }
}