import { Component, inject } from '@angular/core';
import { DiaryService } from '../diary.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  data: any;
  DiaryService = inject(DiaryService);
  router = inject(Router);
  ngOnInit(): void {
    this.DiaryService.gettxt().subscribe((data) => {
      this.data = data;
    });
  }
  onDlelet(even: any) {
    console.log(this.data[even]);
    this.DiaryService.postdelet(this.data[even]).subscribe(() => {
      this.DiaryService.gettxt().subscribe((data) => {
        this.data = data;
      });
    });
  }
  onupdate(even: any) {
    this.DiaryService.postset(this.data[even]).subscribe((data) => {
      this.DiaryService.update = data;
      this.DiaryService.display = true;
      this.router.navigateByUrl('Sabt');
    });
  }
}
