import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  get items() {
    return this.myForm.get('items') as FormArray;
  }

  addItem() {
    const itemGroup = this.fb.group({
      itemName: ['', Validators.required],
    });

    this.items.push(itemGroup);
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
