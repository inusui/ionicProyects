import { Component } from '@angular/core';
import '@capacitor-community/camera-preview';
import {
  CameraPreview,
  CameraPreviewOptions,
} from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  image = null;
  cameraActive = false;

  constructor() {}

  openCamera() {
    //const cameraPreview = (window as any).CapacitorCommunityCameraPreview;
    const camerapreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview',
    };
    CameraPreview.start(camerapreviewOptions);
    this.cameraActive = true;
  }
}
