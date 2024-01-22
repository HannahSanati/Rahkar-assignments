// image-search.component.ts
import { Component, NgModule } from '@angular/core';
import { ImageService } from '../app/services/image.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insert-section.component.html',
  styleUrls: ['./insert-section.component.scss']
})
export class InsertSectionComponent {
  searchTerm = '';
  imageUrl = '';

  constructor(private imageService: ImageService) {}

  searchImage(): void {
    this.imageService.getImageUrl(this.searchTerm)
      // .subscribe(url => this.imageUrl = url);
  }
}
