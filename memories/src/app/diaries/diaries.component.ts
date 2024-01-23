import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-sabt',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './diaries.component.html',
  styleUrl: './diaries.component.scss',
})
export class DiariesComponent {
  fb = inject(FormBuilder);
  public DiaryService = inject(DiaryService);
  router = inject(Router);
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    id: ['', Validators.required],
  });
  ngOnInit(): void {
    if (this.DiaryService.display == true) {
      this.form.get('title')?.setValue(this.DiaryService.update[0].title);
    }
  }
  onclick() {
    console.log(this.form.value);
    this.DiaryService.postsendtxt(this.form.value).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('List');
    });
  }
  onupdate() {
    this.form.patchValue({
      id: this.DiaryService.update[0].id,
    });
    console.log(this.form.value);

    this.DiaryService.postupdate(this.form.value).subscribe((data) => {
      this.DiaryService.display = false;
      this.router.navigateByUrl('');
    });
  }
}
