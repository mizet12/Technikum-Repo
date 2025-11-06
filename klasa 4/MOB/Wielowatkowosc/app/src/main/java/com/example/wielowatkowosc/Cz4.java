package com.example.wielowatkowosc;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import androidx.fragment.app.Fragment;

public class Cz4 extends Fragment {

    private MainActivity.TimerInteractionListener mListener;

    public Cz4() {
        super(R.layout.cz4);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.cz4, container, false);
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        /**
         * zmienne do strony przypisywane do ich odpowienikow
         */
        EditText timerInput = view.findViewById(R.id.timerInput);
        EditText countdownInput = view.findViewById(R.id.countdownInput);
        Button setTimerButton = view.findViewById(R.id.setTimerButton);
        Button setCountdownButton = view.findViewById(R.id.setCountdownButton);
        /**
         * eventy na przyciski przesylajace informacje dalej
         */
        setTimerButton.setOnClickListener(v -> {
            int timerValue = Integer.parseInt(timerInput.getText().toString());
            mListener.onTimerValueSet(timerValue);
        });

        setCountdownButton.setOnClickListener(v -> {
            int countdownValue = Integer.parseInt(countdownInput.getText().toString());
            mListener.onCountdownValueSet(countdownValue);
        });

        if (getActivity() instanceof MainActivity.TimerInteractionListener) {
            mListener = (MainActivity.TimerInteractionListener) getActivity();
        }
    }
}
