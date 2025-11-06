package com.example.myapplication;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class Rejestruj extends AppCompatActivity {
Button but;
EditText edit1, edit2, edit3;
TextView text;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_rejestruj);
        but = findViewById(R.id.button2);
        edit1 = findViewById(R.id.editTextText);
        edit2 = findViewById(R.id.editTextTextPassword);
        edit3 = findViewById(R.id.editTextTextPassword2);
        text = findViewById(R.id.textView5);

        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(edit1.getText().toString().contains("@")){
                    if(edit2.getText().toString().equals(edit3.getText().toString())){
                        text.setText("Witaj " + edit1.getText().toString());
                    }else{
                        text.setText("HAsła nie są równe");
                    }
                }else{
                    text.setText("Nie prawodiły email");
                }
            }
        });
    }
}