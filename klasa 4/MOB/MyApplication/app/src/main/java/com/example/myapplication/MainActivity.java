package com.example.myapplication;

import android.content.res.Resources;
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

public class MainActivity extends AppCompatActivity {
  Button but;
  EditText edit;
  ListView list;
  ArrayList<String> listItem;
  ArrayAdapter<String> adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Resources res = getResources();
        String[] lista = res.getStringArray(R.array.enteries);
        but = findViewById(R.id.button);
        edit = findViewById(R.id.editTextText);
        list = findViewById(R.id.listView);

        listItem = new ArrayList<>(Arrays.asList(lista));
        adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, listItem);
        list.setAdapter(adapter);
        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String tekst = edit.getText().toString();
                listItem.add(tekst);
                adapter.notifyDataSetChanged();
            }
        });
    }
}