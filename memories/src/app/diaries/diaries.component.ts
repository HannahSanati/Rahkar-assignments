import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-diaries',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './diaries.component.html',
  styleUrl: './diaries.component.scss'
})
export class DiariesComponent {
  form!: FormGroup
  searchText = '';

  constructor(private fb:FormBuilder) {
    this.form = fb.group ({
      diary : new FormControl(''),
      date : new FormControl('')
    })
  }

  Data : any[] = []

  onClick() {
    this.Data.push({
      diary : this.form.value.diary ,
      date : this.form.value.date 
    })
    this.form.setValue ({
      diary : '',
      date : ''
    })
  }

  deletData(index : number) {
    this.Data.splice(index,1)
  }
}
