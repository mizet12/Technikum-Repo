package com.example.fragments;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;

public class FragmentRight extends Fragment {
    private ImageView flowerImageView;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        LinearLayout linearLayout = new LinearLayout(requireContext());
        linearLayout.setLayoutParams(new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.MATCH_PARENT
        ));
        linearLayout.setOrientation(LinearLayout.VERTICAL);

        flowerImageView = new ImageView(requireContext());
        flowerImageView.setLayoutParams(new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
        ));
        flowerImageView.setAdjustViewBounds(true);
        flowerImageView.setId(View.generateViewId());

        linearLayout.addView(flowerImageView);

        return linearLayout;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        FragmentRightModel viewModel = new ViewModelProvider(requireActivity()).get(FragmentRightModel.class);

        viewModel.getFlowerImage().observe(getViewLifecycleOwner(), d -> {
            flowerImageView.setImageDrawable(d);
        });
    }

    public FragmentRight() {
        super(R.layout.fragment_right);
    }
}
