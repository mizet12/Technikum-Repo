package com.example.wielowatkowosc;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {
    Cz1 cz1Fragment = (Cz1) getSupportFragmentManager().findFragmentByTag("Cz1");
    public interface TimerInteractionListener {
        void onTimerValueSet(int value);
        void onCountdownValueSet(int value);
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    /**
     * funkcja do przesyłania jednostek
     *
     */
    public void applyTimerOption(String selectedOption) {

            cz1Fragment.applySelectedOption(selectedOption);

    }

    /**
     * funkcje do przesyłania początkowych wartości
     *
     */
    public void onTimerValueSet(int value) {
        if (cz1Fragment != null) {
            cz1Fragment.setTimerStartTime(value);
        }
    }

    public void onCountdownValueSet(int value) {
        if (cz1Fragment != null) {
            cz1Fragment.setCountdownValue(value);
        }
    }
}