package com.example.flower;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.res.Resources;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

public class flowerActivity extends AppCompatActivity {
    String Tag = "FlowerActivity";
    Button back;
    ImageView image;
    TextView text;
    Bundle bundle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flower);

        bundle = getIntent().getExtras();
        int flowerId = bundle.getInt("com.flowerId");
        image = findViewById(R.id.imageView);
        back = findViewById(R.id.button2);
        text = findViewById(R.id.textView);

        Resources res = getResources();
        if(flowerId == 1 ){
            image.setImageDrawable(res.getDrawable(R.drawable.kwiaty1));
            text.setText(res.getText(R.string.kwiat1));
        }else if( flowerId == 2){
            image.setImageDrawable(res.getDrawable(R.drawable.kwiaty2));
            text.setText(res.getText(R.string.kwiat2));
        } else if (flowerId == 3) {
            image.setImageDrawable(res.getDrawable(R.drawable.kwiaty3));
            text.setText(res.getText(R.string.kwiat3));
        }else{
            return;
        }
        back.setOnClickListener(view ->{
            Intent intent = new Intent(this, MainActivity.class);
            intent.setAction(Intent.ACTION_SEND);
            startActivity(intent);
        });
    }
}