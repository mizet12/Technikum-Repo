package com.example.mw_kolory_33;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private TextView MW_label;
    private Spinner MW_backgroundSpinner;
    private Spinner MW_textColorSpinner;
    private Button MW_confirmButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        MW_label = findViewById(R.id.label);
        MW_backgroundSpinner = findViewById(R.id.background_spinner);
        MW_textColorSpinner = findViewById(R.id.text_color_spinner);
        MW_confirmButton = findViewById(R.id.confirm_button);

        ArrayAdapter<CharSequence> backgroundAdapter = ArrayAdapter.createFromResource(this,
                R.array.colors_array, android.R.layout.simple_spinner_item);
        backgroundAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        MW_backgroundSpinner.setAdapter(backgroundAdapter);

        ArrayAdapter<CharSequence> textColorAdapter = ArrayAdapter.createFromResource(this,
                R.array.colors_array, android.R.layout.simple_spinner_item);
        textColorAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        MW_textColorSpinner.setAdapter(textColorAdapter);

        MW_backgroundSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                changeBackgroundColor(parent.getItemAtPosition(position).toString());
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {
            }
        });

        MW_textColorSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                changeTextColor(parent.getItemAtPosition(position).toString());
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {
            }
        });

        MW_confirmButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                confirmSelection();
            }
        });
    }

    private void changeBackgroundColor(String colorName) {
        int color = Color.parseColor(colorName);
        MW_label.setBackgroundColor(color);
    }

    private void changeTextColor(String colorName) {
        int color = Color.parseColor(colorName);
        MW_label.setTextColor(color);
    }

    private void confirmSelection() {
        String backgroundColor = MW_backgroundSpinner.getSelectedItem().toString();
        String textColor = MW_textColorSpinner.getSelectedItem().toString();

        if (!backgroundColor.equals(textColor)) {
            Toast.makeText(MainActivity.this, "Selection Confirmed!", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(MainActivity.this, "Background and text color must be different!", Toast.LENGTH_SHORT).show();
        }
    }
}
