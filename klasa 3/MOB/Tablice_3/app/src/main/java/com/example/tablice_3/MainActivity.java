package com.example.tablice_3;

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
        int[] ludnosc2021 = {5429574, 4505464, 3511951, 3396282, 2895425, 2333056, 1706719, 2147456, 2067846, 2121580, 1406087, 2441617, 1001178, 1173651, 1225953, 976178};
        int[] ludnosc2018 = {5379890, 4528843, 3501345, 3378776, 2895712, 2333888, 1712315, 2139746, 2091085, 2127244, 1423622, 2469046, 998590, 1180784, 1244361, 988379};
        for(int i = 0; i < wojewodztwa.length; i++){
            TextView text = new TextView(this);
            int roznica;
            if(ludnosc2021[i] - ludnosc2018[i] < 0){
                roznica = (ludnosc2021[i] - ludnosc2018[i]) * -1;
            }else{
                roznica = ludnosc2021[i] - ludnosc2018[i];
            }
            String tekst = wojewodztwa[i] + " <b>" + ludnosc2021[i] + " w roku 2021 </b><i><u>" + roznica + "</u></i>(|2021-2018|)";
            text.setText(Html.fromHtml(tekst));
            layout.addView(text);
        }
        setContentView(layout);
    }
}