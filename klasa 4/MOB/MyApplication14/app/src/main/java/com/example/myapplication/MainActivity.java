package com.example.myapplication;

import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.Random;

public class MainActivity extends AppCompatActivity {
Button but1, but2;
ImageView image1, image2, image3, image4, image5;
int arr[] = new int[5];
int gra = 0;
int count[] = new int[7];
int los =0;

TextView text_los, text_gry;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        but1 = findViewById(R.id.button);
        but2 = findViewById(R.id.button2);
        image1 = findViewById(R.id.imageView1);
        image2 = findViewById(R.id.imageView2);
        image3 = findViewById(R.id.imageView3);
        image4 = findViewById(R.id.imageView4);
        image5 = findViewById(R.id.imageView5);
        text_los = findViewById(R.id.textView2);
        text_gry = findViewById(R.id.textView3);
        Random rand = new Random();

        Drawable tab[] = {getResources().getDrawable(R.drawable.question),getResources().getDrawable(R.drawable.k1), getResources().getDrawable(R.drawable.k2), getResources().getDrawable(R.drawable.k3), getResources().getDrawable(R.drawable.k4), getResources().getDrawable(R.drawable.k5), getResources().getDrawable(R.drawable.k6)};

        but1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {


                for(int i = 0; i < 5; i++){
                    arr[i] = rand.nextInt(6) + 1;
                }
                los = 0;
                image1.setImageDrawable(tab[arr[0]]);
                image2.setImageDrawable(tab[arr[1]]);
                image3.setImageDrawable(tab[arr[2]]);
                image4.setImageDrawable(tab[arr[3]]);
                image5.setImageDrawable(tab[arr[4]]);

                for(int i = 0; i < 5; i++){
                    count[arr[i]]++;
                }


                for(int i = 1; i < 7; i++){
                    if(count[i] >= 2){
                        los += i * count[i];
                    }
                }
                text_los.setText("Wynik losowania: " + los);

                gra = gra + los;

                text_gry.setText("Wynik gry: " + gra);
            }
        });

        but2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                image1.setImageDrawable(getResources().getDrawable(R.drawable.question));
                image2.setImageDrawable(getResources().getDrawable(R.drawable.question));
                image3.setImageDrawable(getResources().getDrawable(R.drawable.question));
                image4.setImageDrawable(getResources().getDrawable(R.drawable.question));
                image5.setImageDrawable(getResources().getDrawable(R.drawable.question));
                text_los.setText("Wynik tego losowania: 0" );
                text_gry.setText("Wynik gry: 0" );

            }
        });
    }
}