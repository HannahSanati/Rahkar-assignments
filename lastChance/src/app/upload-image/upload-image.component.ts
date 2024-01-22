import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
export class UploadImageComponent {
  @Output() imageUploaded = new EventEmitter<File>();

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.imageUploaded.emit(file);
  }

  uploadImage(): void {
    // Implement image upload logic here (e.g., using a service)
  }
}
