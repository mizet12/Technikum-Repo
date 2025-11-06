package com.example.fragments;

import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentContainerView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LinearLayout mainLayout = new LinearLayout(this);
        mainLayout.setLayoutParams(new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.MATCH_PARENT
        ));
        mainLayout.setOrientation(LinearLayout.HORIZONTAL);

        FragmentContainerView fragmentLeftContainer = new FragmentContainerView(this);
        fragmentLeftContainer.setLayoutParams(new LinearLayout.LayoutParams(
                0,
                LinearLayout.LayoutParams.MATCH_PARENT,
                0.30f
        ));
        fragmentLeftContainer.setId(View.generateViewId());
        getSupportFragmentManager().beginTransaction()
                .replace(fragmentLeftContainer.getId(), new FragmentLeft())
                .commit();

        FragmentContainerView fragmentRightContainer = new FragmentContainerView(this);
        fragmentRightContainer.setLayoutParams(new LinearLayout.LayoutParams(
                0,
                LinearLayout.LayoutParams.MATCH_PARENT,
                0.70f
        ));
        fragmentRightContainer.setId(View.generateViewId());
        getSupportFragmentManager().beginTransaction()
                .replace(fragmentRightContainer.getId(), new FragmentRight())
                .commit();

        mainLayout.addView(fragmentLeftContainer);
        mainLayout.addView(fragmentRightContainer);

        setContentView(mainLayout);
    }
}
