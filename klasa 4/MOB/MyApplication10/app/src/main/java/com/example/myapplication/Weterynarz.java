package com.example.myapplication;

import android.app.Notification;
import android.os.Bundle;
import android.view.View;
import android.widget.Adapter;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.SeekBar;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.ArrayList;
import java.util.Arrays;

public class Weterynarz extends AppCompatActivity {
    ListView list;
    ArrayList<String> listItems;
    ArrayAdapter adapter;
    EditText edit1, edit2, edit3;
    String gatunek;
    SeekBar seek;
    Button but1;
    TextView text;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_weterynarz);
        list = findViewById(R.id.listView2);
        seek = findViewById(R.id.seekBar2);
        text = findViewById(R.id.textView12);
        but1 = findViewById(R.id.button8);
        edit1 = findViewById(R.id.editTextText3);
        edit2 = findViewById(R.id.editTextText4);
        edit3 = findViewById(R.id.editTextTime);

        listItems = new ArrayList<>(Arrays.asList(getResources().getStringArray(R.array.gatunki)));
        adapter = new ArrayAdapter(this, android.R.layout.simple_list_item_1, listItems);
        list.setAdapter(adapter);

        seek.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                text.setText(String.valueOf(seek.getProgress()));
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });
        list.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                if(parent.getItemAtPosition(position).toString().equals("Pies")){
                    gatunek = "Pies";
                    seek.setMax(18);
                }else if(parent.getItemAtPosition(position).toString().equals("Kot")){
                    seek.setMax(20);
                    gatunek = "Kot";
                }else if(parent.getItemAtPosition(position).toString().equals("Świnka morska")){
                    seek.setMax(9);
                    gatunek = "Świnka morska";
                }
            }
        });
        but1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                AlertDialog.Builder builder = new AlertDialog.Builder(Weterynarz.this);
                builder.setMessage(edit1.getText().toString() + " " + gatunek + " " + String.valueOf(seek.getProgress()) + " " + edit2.getText().toString() + " " + edit3.getText().toString());
                builder.setPositiveButton("OK", null);

                AlertDialog dialog = builder.create();
                dialog.show();
            }
        });

    }
}