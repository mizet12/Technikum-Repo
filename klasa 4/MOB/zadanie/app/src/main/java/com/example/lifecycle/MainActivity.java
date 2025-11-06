package com.example.lifecycle;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "LifeCycle";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "onCreate aktywowane");
    }
    @Override
    protected void onStart(){
        super.onStart();
        Log.d(TAG, "onStart aktywowane");
    };
    @Override
    protected void onRestart(){
        super.onRestart();
        Log.d(TAG, "onRestart aktywowane");
    };
    @Override
    protected void onResume(){
        super.onResume();
        Log.d(TAG, "onResume aktywowane");
    };
    @Override
    protected void onPause(){
        super.onPause();
        Log.d(TAG, "onPause aktywowane");
    };
    @Override
    protected void onStop(){
        super.onStop();
        Log.d(TAG, "onStop aktywowane");
    };
    @Override
    protected void onDestroy(){
        super.onDestroy();
        Log.d(TAG, "onDestroy aktywowane");
    };
}
