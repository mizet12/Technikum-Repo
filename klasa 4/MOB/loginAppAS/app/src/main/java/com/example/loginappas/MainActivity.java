package com.example.loginappas;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    EditText email, pass, passv;
    Button check;
    TextView text;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        check = findViewById(R.id.button);
        text = findViewById(R.id.textView5);
        check.setOnClickListener(view -> {
            email = findViewById(R.id.editTextTextEmailAddress);
            pass = findViewById(R.id.editTextTextPassword);
            passv = findViewById(R.id.editTextTextPassword2);
            String passS = pass.getText().toString();
            String passvS = passv.getText().toString();
            String emailS = email.getText().toString();
                if (emailS.contains("@")){
                    if(passS.equals(passvS)){
                        text.setText("Witaj " + emailS);
                    }else{
                        text.setText("Hasła się różnią");
                    }
                }else{
                    text.setText("Nie poprawny adres e-mail");
                }


        });

    }
}