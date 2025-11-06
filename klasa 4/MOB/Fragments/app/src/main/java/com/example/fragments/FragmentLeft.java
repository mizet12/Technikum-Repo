package com.example.fragments;

import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;

import java.io.IOException;
import java.io.InputStream;

public class FragmentLeft extends Fragment {
    FragmentRightModel viewModel;

    public void SetImage(String path) throws IOException {
        InputStream ims = getActivity().getAssets().open(path);
        Drawable drawable = Drawable.createFromStream(ims, null);
        viewModel.setFlowerImage(drawable);
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        LinearLayout linearLayout = new LinearLayout(requireContext());
        linearLayout.setLayoutParams(new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.MATCH_PARENT
        ));
        linearLayout.setOrientation(LinearLayout.VERTICAL);

        Button button1 = createButton("kwiat1");
        Button button2 = createButton("kwiat2");
        Button button3 = createButton("kwiat3");

        linearLayout.addView(button1);
        linearLayout.addView(button2);
        linearLayout.addView(button3);

        viewModel = new ViewModelProvider(requireActivity()).get(FragmentRightModel.class);

2        button1.setOnClickListener(v -> loadImage("kwiat1.jpg"));
        button2.setOnClickListener(v -> loadImage("kwiat2.jpg"));
        button3.setOnClickListener(v -> loadImage("kwiat3.jpg"));

        return linearLayout;
    }

    private Button createButton(String text) {
        Button button = new Button(requireContext());
        button.setLayoutParams(new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
        ));
        button.setId(View.generateViewId());
        button.setText(text);
        return button;
    }

    private void loadImage(String imageName) {
        try {
            SetImage(imageName);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
