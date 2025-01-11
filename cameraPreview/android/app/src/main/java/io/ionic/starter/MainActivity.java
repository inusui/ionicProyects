package io.ionic.starter;

import com.ahm.capacitor.camera.preview.CameraPreview;

import android.os.Bundle;
import com.getcapacitor.Plugin;

import com.getcapacitor.BridgeActivity;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle saveInstanceState) {
        super.onCreate(saveInstanceState);

        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {

            {

                add(CameraPreview.class);
            }
        });
    }
}
