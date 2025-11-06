package com.example.loginapp;

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

public class MainActivity extends AppCompatActivity {
    TextView komunikat;
    Button zat;
    EditText email, pass1, pass2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        komunikat = findViewById(R.id.textView4);
        zat = findViewById(R.id.button);
        email = findViewById(R.id.editTextText);
        pass1 = findViewById(R.id.editTextTextPassword);
        pass2 = findViewById(R.id.editTextTextPassword2);

        zat.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String emailS = email.getText().toString();
                String passS1 = pass1.getText().toString();
                String passS2 = pass2.getText().toString();
                if(emailS.contains("@")){
                    if(passS1.equals(passS2)){
                        komunikat.setText("Witaj");
                    }else{
                        komunikat.setText("HASLO");
                    }
                }else{
                    komunikat.setText("EMAIL");
                }
            }
        });
    }
}