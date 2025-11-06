package com.example.tablice2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.Html;
import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LinearLayout layout = new LinearLayout(this);
        layout.setOrientation(LinearLayout.VERTICAL);
        String[] wojewodztwa = {"mazowieckie", "śląskie", "wielkopolskie", "małopolskie", "dolnośląskie", "pomorskie", "zachodniopomorskie", "lubelskie", "kujawsko-pomorskie", "podkarpackie", "warmińsko-mazurskie", "łódzkie", "lubuskie", "podlaskie", "świętokrzyskie", "opolskie"};
        String[] ludnosc = {"5429574", "4505464", "3511951", "3396282", "2895425", "2333056", "1706719", "2147456", "2067846", "2121580", "1406087", "2441617", "1001178", "1173651", "1225953", "976178"};
        for(int i = 0; i < wojewodztwa.length; i++){
            TextView text = new TextView(this);
            String tekst = wojewodztwa[i] + " <b>" + ludnosc[i] + "</b>";
            text.setText(Html.fromHtml(tekst));
            layout.addView(text);
        }
        setContentView(layout);
    }
}