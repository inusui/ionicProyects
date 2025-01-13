package io.ionic.starter;

import com.ahm.capacitor.camera.preview.CameraPreview;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle saveInstanceState) {
        super.onCreate(saveInstanceState);

       registerPlugin(CameraPreview.class);
    }
}
