package com.androidphonegap;

import android.os.Bundle;
import org.apache.cordova.DroidGap;
import android.app.Activity;
import android.view.Menu;

public class AndroidPhonegapActivity extends DroidGap {

    
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/views/index.html");
    }

   
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }
    
}
