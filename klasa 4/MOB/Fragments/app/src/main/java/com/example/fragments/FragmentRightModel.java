package com.example.fragments;

import android.graphics.drawable.Drawable;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class FragmentRightModel extends ViewModel {
    private MutableLiveData<Drawable> image = new MutableLiveData<>();

    public void setFlowerImage(Drawable x){image.setValue(x);}

    public LiveData<Drawable> getFlowerImage(){return image;}
}
