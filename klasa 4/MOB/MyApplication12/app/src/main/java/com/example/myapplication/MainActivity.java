package com.example.myapplication;

import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {
    ImageView image1 ,image2, image3;
    int image_pressed;
    boolean clicked = false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        image1 = findViewById(R.id.imageView);
        image2 = findViewById(R.id.imageView2);
        image3 = findViewById(R.id.imageView3);

        Drawable tab[] = {getResources().getDrawable(R.drawable.asd1), getResources().getDrawable(R.drawable.asd2), getResources().getDrawable(R.drawable.asd3), getResources().getDrawable(R.drawable.asd4)};

        image1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(clicked == false){
                    clicked = true;
                    image_pressed = 1;
                }else{
                    if(image_pressed == 2){
                        image2.setImageDrawable(tab[0]);
                        image1.setImageDrawable(tab[1]);
                        clicked = false;
                        swap(tab, 0, 1);
                    }else if(image_pressed == 3){
                        image3.setImageDrawable(tab[0]);
                        image1.setImageDrawable(tab[2]);
                        clicked = false;
                        swap(tab, 0 ,2);

                    }
                }
            }
        });
        image2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(clicked == false){
                    clicked = true;
                    image_pressed = 2;
                }else{
                    if(image_pressed == 1){
                        image2.setImageDrawable(tab[0]);
                        image1.setImageDrawable(tab[1]);
                        clicked = false;
                        swap(tab,0,1);

                    }else if(image_pressed == 3){
                        image3.setImageDrawable(tab[1]);
                        image2.setImageDrawable(tab[2]);
                        clicked = false;
                        swap(tab,1,2);

                    }
                }
            }
        });
        image3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(clicked == false){
                    clicked = true;
                    image_pressed = 3;
                }else{
                    if(image_pressed == 1){
                        image3.setImageDrawable(tab[0]);
                        image1.setImageDrawable(tab[2]);
                        clicked = false;
                        swap(tab, 0,2);

                    }else if(image_pressed == 2){
                        image3.setImageDrawable(tab[1]);
                        image2.setImageDrawable(tab[2]);
                        clicked = false;
                        swap(tab,1,2);

                    }
                }
            }
        });
    }

    void swap(Drawable arr[], int a, int b){
        Drawable temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}