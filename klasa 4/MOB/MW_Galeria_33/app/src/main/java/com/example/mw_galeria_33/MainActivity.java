package com.example.mw_galeria_33;

import android.os.Bundle;
import android.os.Handler;
import android.widget.ImageView;
import android.widget.ProgressBar;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private ProgressBar progressBar;
    private ImageView imageView;
    private int[] imageResources = {R.drawable.image1, R.drawable.image2, R.drawable.image3};
    private int currentImageIndex = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        progressBar = findViewById(R.id.progressBar);
        imageView = findViewById(R.id.imageView);

        startLoop();
    }

    private void startLoop() {
        final Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                imageView.setVisibility(ImageView.GONE);
                progressBar.setVisibility(ProgressBar.VISIBLE);
                currentImageIndex = (currentImageIndex + 1) % imageResources.length;

                handler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                       progressBar.setVisibility(ProgressBar.GONE);
                        imageView.setImageResource(imageResources[currentImageIndex]);
                        imageView.setVisibility(ImageView.VISIBLE);

                        handler.postDelayed(new Runnable() {
                            @Override
                            public void run() {
                                startLoop();
                            }
                        }, 1000);
                    }
                }, 1000);
            }
        }, 1000);
    }
}
