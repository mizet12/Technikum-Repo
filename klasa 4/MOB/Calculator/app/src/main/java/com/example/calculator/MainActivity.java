package com.example.calculator;

import static java.lang.Math.pow;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.res.Configuration;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    public EditText num1, num2;
    public Button add, sub, mul, div, Cl, Eq, Re;
    public TextView res;

    public Double wyn;

    public Double pre1, pre2;
    public String pref;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        num1 = findViewById(R.id.input1);
        num2 = findViewById(R.id.input2);
        add = findViewById(R.id.buttonadd);
        sub = findViewById(R.id.buttonsub);
        mul = findViewById(R.id.buttonmul);
        div = findViewById(R.id.buttondiv);
        Cl = findViewById(R.id.buttoncl);
        Eq = findViewById(R.id.buttoneq);
        res = findViewById(R.id.textView);
        Re = findViewById(R.id.buttonre);
        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                double numer1 = Double.parseDouble(num1.getText().toString());
                double numer2 = Double.parseDouble(num2.getText().toString());
                pre1 = numer1;
                pre2 = numer2;
                pref = "+";
                wyn = numer1 + numer2;

            }
        });
        sub.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                double numer1 = Double.parseDouble(num1.getText().toString());
                double numer2 = Double.parseDouble(num2.getText().toString());
                pre1 = numer1;
                pre2 = numer2;
                pref = "-";
                wyn = numer1 - numer2;

            }
        });
        mul.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                double numer1 = Double.parseDouble(num1.getText().toString());
                double numer2 = Double.parseDouble(num2.getText().toString());
                pre1 = numer1;
                pre2 = numer2;
                pref = "*";
                wyn = numer1 * numer2;

            }
        });
        div.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                double numer1 = Double.parseDouble(num1.getText().toString());
                double numer2 = Double.parseDouble(num2.getText().toString());
                pre1 = numer1;
                pre2 = numer2;
                pref = "/";
                wyn = numer1 / numer2;

            }
        });
        Eq.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                res.setText(wyn.toString());
            }
        });
        Cl.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                num1.setText("");
                num2.setText("");
                res.setText("");
            }
        });

    }

    @Override
    public void onConfigurationChanged(@NonNull Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        if (newConfig.orientation == Configuration.ORIENTATION_PORTRAIT){
            Re.setText("Recall last one");
            Re.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    num1.setText(pre1.toString());
                    num2.setText(pre2.toString());
                    if(pref == "+"){
                        res.setText((pre1 + pre2) + "");
                    } else if (pref == "-") {
                        res.setText((pre1 - pre2) + "");
                    } else if (pref == "*") {
                        res.setText((pre1 * pre2) + "");
                    } else if (pref == "/") {
                        res.setText((pre1 / pre2) + "");
                    }else if (pref == "^"){
                        res.setText((pow(pre1, pre2)) + "");
                    }
                }
            });
        } else if (newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            Re.setText("Potega a do b");
            Re.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    double numer1 = Double.parseDouble(num1.getText().toString());
                    double numer2 = Double.parseDouble(num2.getText().toString());
                    pre1 = numer1;
                    pre2 = numer2;
                    pref = "^";
                    wyn = pow(numer1, numer2);
                }
            });
        }
    }
}