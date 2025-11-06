package com.example.myapplication;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.ArrayList;
import java.util.Arrays;

public class Lista extends AppCompatActivity {
    EditText edit;
    Button but;
    ListView list;
    ArrayList<String> listItems;
    ArrayAdapter<String> adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista);
        edit = findViewById(R.id.editTextText2);
        but = findViewById(R.id.button6);
        list = findViewById(R.id.listView);
        listItems = new ArrayList<>(Arrays.asList(getResources().getStringArray(R.array.enteries)));
        adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, listItems);
        list.setAdapter(adapter);

        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                listItems.add(edit.getText().toString());
                adapter.notifyDataSetChanged();
            }
        });
    }
}