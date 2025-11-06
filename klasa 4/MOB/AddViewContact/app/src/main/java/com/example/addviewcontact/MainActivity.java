package com.example.addviewcontact;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    Button newC, showC;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        newC = findViewById(R.id.button);
        showC = findViewById(R.id.button2);

        newC.setOnClickListener(view -> {
            Intent intent = new Intent(Intent.ACTION_INSERT_OR_EDIT);
            intent.setType(ContactsContract.Contacts.CONTENT_ITEM_TYPE);
            intent.putExtra(ContactsContract.Intents.Insert.NAME, "Jan");
            intent.putExtra(ContactsContract.Intents.Insert.PHONE, "123456789");
            intent.putExtra(ContactsContract.Intents.Insert.EMAIL, "Jan@op.pl");

            startActivity(intent);
        });
        showC.setOnClickListener(view -> {
            Intent intent = new Intent(Intent.ACTION_PICK, ContactsContract.Contacts.CONTENT_URI);
            startActivity(intent);
        });
    }
}