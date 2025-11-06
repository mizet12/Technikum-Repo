package com.example.myapplication;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.os.Bundle;
import android.util.AttributeSet;
import android.view.View;
import android.widget.LinearLayout;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Tworzenie niestandardowego widoku (CustomView)
        CustomView customView = new CustomView(this);

        setContentView(customView);
    }
    //utworzenie klasy Custom View dziedziczącej od wbudowanej klasy View
    public class CustomView extends View {
        private Paint paint;
        private Random random;
        //Kontruktor klasy przyjmujący jeden dziedziczony argument
        // który jest obiektem dostarczającym informacje o zasobach Androida
        public CustomView(Context context) {
            super(context);

        }
        //funkcja init


        @Override
        protected void onDraw(Canvas canvas) {
            paint = new Paint();
            random = new Random();
            super.onDraw(canvas);

            // Generowanie losowej liczby od 0 do 255
            int randomNumber = random.nextInt(256);

            // Rysowanie prostokąta w losowym kolorze
            int rectColor = Color.rgb( randomNumber, 0, 255 - randomNumber);
            paint.setColor(rectColor);
            canvas.drawRect(100, 100, 500, 500, paint);
        }
    }
}