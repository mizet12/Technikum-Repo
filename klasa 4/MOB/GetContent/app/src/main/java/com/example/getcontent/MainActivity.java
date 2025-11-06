package com.example.getcontent;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContract;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    Button button;
    TextView text;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        button = findViewById(R.id.button);
        text = findViewById(R.id.textView);
        button.setOnClickListener(view -> {
            Intent intent = new Intent(Intent.ACTION_PICK, ContactsContract.Contacts.CONTENT_URI);
            Result.launch(intent);
        });
    }
    public ActivityResultLauncher<Intent> Result = registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
        if (result.getResultCode() == Activity.RESULT_OK){
            Intent intent = result.getData();
            Uri uri = intent.getData();
            Cursor cur = getContentResolver().query(uri, null, null, null, null);
            if (cur.moveToFirst()){
                int data = cur.getColumnIndex(ContactsContract.Contacts._ID);
                String id = cur.getString(data);
                data = cur.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME);
                String name = cur.getString(data);
                text.setText("Kontakt : " + id + "\n" + name);
            }

        }
            });
}