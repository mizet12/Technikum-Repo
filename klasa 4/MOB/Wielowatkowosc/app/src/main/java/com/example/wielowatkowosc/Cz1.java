package com.example.wielowatkowosc;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.fragment.app.Fragment;

public class Cz1 extends Fragment {
    /**
     * @author Michał Wiliński 4F
     */

    /**
     *
     * zmienna do wybierania jednostki czasu w timerze. Bazowo jest wybrana sekunda
     */
    long interval = 1000;

    /**
     *  zmienne odpowiadające elementom strony
     */
    private Button startTimerButton, resetTimerButton, startCountdownButton, resetCountdownButton;
    private Thread timerThread, countdownThread;
    private String selectedTimerUnit;
    /**
     * zmienne do psrawdzenia czy timer oraz countdown działają
     */
    boolean timerRunning, countdownRunning;
    /**
     * zmienna do wybierania wartości począrkowej
     */
    private long timerStartTime;
    /**
     * zmienna do wybierania wartości początkowej
     */
    private int countdownValue = 10;
    public Cz1() {}

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        return inflater.inflate(R.layout.cz1, container, false);
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        /**
         * przypisywanie zmiennych do elementów na stronie
         */
        startTimerButton = view.findViewById(R.id.startTimerButton);
        resetTimerButton = view.findViewById(R.id.resetTimerButton);
        startCountdownButton = view.findViewById(R.id.startCountdownButton);
        resetCountdownButton = view.findViewById(R.id.resetCountdownButton);
        /**
         * dodawnia eventów
         */

        startTimerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startTimerThread(interval);
            }
        });

        resetTimerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                resetTimerThread();
            }
        });

        startCountdownButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startCountdownThread();
            }
        });

        resetCountdownButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                resetCountdownThread();
            }
        });
    }

    /**
     * funckja do sprawdzania jaką jednostke użytownik wybrał w cz3 oraz dostosowywanie zmiennej od czasu
     *
     */
    public void applySelectedOption(String selectedOption) {
        if ("minuta".equals(selectedOption)) {
            interval = 60 * 1000; // 1 minute
        } else if ("godzina".equals(selectedOption)) {
            interval = 60 * 60 * 1000; // 1 hour
        } else if ("doba".equals(selectedOption)) {
            interval = 24 * 60 * 60 * 1000; // 1 day
        }


    }

    /**
     * wątek do uruchomienia timera
     *
     */
    private void startTimerThread(long interval) {

        timerThread = new Thread(new Runnable() {
            @Override
            public void run() {
                timerRunning = true;
                while (timerRunning && !Thread.currentThread().isInterrupted()) {
                    try {
                        Thread.sleep(interval);
                        timerStartTime++;
                        getActivity().runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                TextView timerTextView = getActivity().findViewById(R.id.timerTextView);
                                timerTextView.setText(String.valueOf(timerStartTime));
                            }
                        });
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        });
        timerThread.start();
    }

    /**
     * wątek od resetowania timera
     */
    private void resetTimerThread() {
        timerRunning = false;
        if (timerThread != null) {
            timerThread.interrupt();
        }
        timerStartTime = 0;
        TextView timerTextView = getActivity().findViewById(R.id.timerTextView);
        timerTextView.setText("0");
    }

    /**
     * wątek od uruchamiania countdown
     */
    private void startCountdownThread() {
        Thread countdownThread = new Thread(new Runnable() {
            @Override
            public void run() {

                while (countdownValue >= 0 && !Thread.currentThread().isInterrupted()) {
                    final String countdownString = String.valueOf(countdownValue);
                    getActivity().runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            TextView countdownTextView = getActivity().findViewById(R.id.countdownTextView);
                            countdownTextView.setText(countdownString);
                        }
                    });
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                    countdownValue--;
                }
            }
        });
        countdownThread.start();
    }

    /**
     * wątek od resetowania countdown
     */
    private void resetCountdownThread() {
        countdownRunning = false;
        if (countdownThread != null) {
            countdownThread.interrupt();
        }
        countdownValue = 10;
        TextView countdownTextView = getActivity().findViewById(R.id.countdownTextView);
        countdownTextView.setText("10");
    }

    /**
     * funkcja od ustawiania wartosci poczatkowej timera
     *
     */
    public void setTimerStartTime(int startTime) {
        timerStartTime = startTime;
    }

    /**
     * funkcja od uruchamiania wartosci poczotkowej countdownu
     *
     */
    public void setCountdownValue(int value) {
        countdownValue = value;
    }
}
