package com.example.mw_miasta_auto_uzupelanianie_33;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.MultiAutoCompleteTextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private MultiAutoCompleteTextView MW_multiAutoCompleteTextView;
    private ArrayAdapter<String> MW_adapter;

    private String[] MW_cities = {
            "Warszawa", "Kraków", "Łódź", "Wrocław", "Poznań",
            "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok",
            "Katowice", "Gdynia", "Częstochowa", "Radom", "Sosnowiec",
            "Toruń", "Kielce", "Rzeszów", "Gliwice", "Zabrze"
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        MW_multiAutoCompleteTextView = findViewById(R.id.multiAutoCompleteTextView);

        MW_adapter = new ArrayAdapter<>(this, android.R.layout.simple_dropdown_item_1line, MW_cities);

        MW_multiAutoCompleteTextView.setAdapter(MW_adapter);

        MW_multiAutoCompleteTextView.setTokenizer(new MultiAutoCompleteTextView.Tokenizer() {
            @Override
            public int findTokenStart(CharSequence text, int cursor) {
                int i = cursor;
                while (i > 0 && text.charAt(i - 1) != ' ') {
                    i--;
                }
                while (i < cursor && text.charAt(i) == ' ') {
                    i++;
                }
                return i;
            }

            @Override
            public int findTokenEnd(CharSequence text, int cursor) {
                int i = cursor;
                int len = text.length();
                while (i < len) {
                    if (text.charAt(i) == ' ') {
                        return i;
                    } else {
                        i++;
                    }
                }
                return len;
            }

            @Override
            public CharSequence terminateToken(CharSequence text) {
                return text + " ";
            }
        });
    }
}
