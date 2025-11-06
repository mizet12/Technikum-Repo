package com.example.wielowatkowosc;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class Cz3 extends Fragment {
    /**
     * zmienne od wybranej opcji
     */
    String selectedOption, selectedOption2;
    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        /**
         * tablica z wartoscami do spinnera
         */
        String[] timeUnits = {"sekunda", "minuta", "godzina", "doba"};
        /**
         * adapter do spinnera
         */
        ArrayAdapter<String> adapter = new ArrayAdapter<>(requireContext(), android.R.layout.simple_spinner_dropdown_item, timeUnits);

        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        Spinner timerUnitSpinner = view.findViewById(R.id.timerUnitSpinner);
        Spinner CountdownSpinner = view.findViewById(R.id.countdownUnitSpinner);
        timerUnitSpinner.setAdapter(adapter);
        CountdownSpinner.setAdapter(adapter);
        /**
         * wybieranie opcji z spinnera
         */
        timerUnitSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                selectedOption = parent.getItemAtPosition(position).toString();

            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {
            }
        });

        CountdownSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                selectedOption2 = parent.getItemAtPosition(position).toString();

            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {
            }
        });
        /**
         * eventy na przyciskanie przyciskow i przeslanie informacji do main activity
         */
        Button applyButton = view.findViewById(R.id.applyButton);
        applyButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                applySelectedOption();
            }
        });

        Button applyButton2 = view.findViewById(R.id.applyButton2);
        applyButton2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
    }



    private void applySelectedOption() {
        ((MainActivity) requireActivity()).applyTimerOption(selectedOption);
    }

    public Cz3() {
        super(R.layout.cz3);
    }
}
