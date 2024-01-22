import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'YOUR_BACKEND_API_URL';

  constructor(private http: HttpClient) {}

  uploadImage(file: File) {}

  getImageUrl(searchTerm: string) {}
}
