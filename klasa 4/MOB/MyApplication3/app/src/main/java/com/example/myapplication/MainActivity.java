package com.example.myapplication;

import android.os.Bundle;
import android.view.View;
import android.widget.Adapter;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.ListView;
import android.widget.Switch;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {
ListView list;
ArrayList<String> listItems;
ArrayAdapter<String> adapter;
Switch swi;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        list = findViewById(R.id.listView);
        swi = findViewById(R.id.switch1);

        String[] lista = getResources().getStringArray(R.array.eterei);


        listItems = new ArrayList<>(Arrays.asList(lista));
        adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, listItems);
        list.setAdapter(adapter);

        swi.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked){
                    listItems.add("C");
                    adapter.notifyDataSetChanged();
                }else {
                    listItems.add("D");
                    adapter.notifyDataSetChanged();
                }
            }
        });
    }
}