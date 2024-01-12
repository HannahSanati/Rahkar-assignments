import { Component } from '@angular/core';
import { DiaryService } from '../diary.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  form!: FormGroup
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
}
