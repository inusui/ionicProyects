import { Component } from '@angular/core';
import '@capacitor-community/camera-preview';
import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  image = '';
  cameraActive = false;

  constructor() {}

  openCamera() {
    const camerapreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview',
      toBack: true,
    };
    CameraPreview.start(camerapreviewOptions);
    this.cameraActive = true;
  }

  async stopCamera() {
    await CameraPreview.stop();
    this.cameraActive = false;
  }

  async captureImage() {
    const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 85,
    };

    const result = await CameraPreview.capture(cameraPreviewPictureOptions);
    this.image = `data:image/jpeg;base64,${result.value}`;
    this.stopCamera();
  }

  flipCamera() {
    CameraPreview.flip();
  }
}
