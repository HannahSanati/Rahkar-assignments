import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TelegramService } from '../telegram.service';
@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss',
})
export class TelegramComponent {
  constructor(
    private telegramService: TelegramService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addItems();
  }
  chat_id: number[] = [518311870, 2343567];
  errorMessage: string | null = null;

  form: FormGroup = this.formBuilder.group({
    text: ['', Validators.required],
    photo: ['', Validators.required],
    caption: ['', Validators.required],
    button: [],
    items: this.formBuilder.array([]),
  });

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addItems() {
    this.items.push(
      this.formBuilder.group({
        name: [''],
        mobile:['']
      })
    );
  }

  removeAt(index: number) {
    this.items.removeAt(index);
  }

  convert(list: any[]) {
    var convertible: any = [];
    let numberOfButten = this.form.value.button;

    for (let i = 0; i < list.length; i += numberOfButten) {
      const rowButtons = list.slice(i, i + numberOfButten).map((element) => ({
        text: element.name,
        callback_data: element.name,
      }));

      convertible.push(rowButtons);
    }
    return convertible;
  }

  submit() {
    this.errorMessage = null;
    if (this.form.valid) {
      this.telegramService.sendMessage(
          this.chat_id[0],
          this.form.get('text')?.value,
          this.convertible(this.items.value)
        ).subscribe((data) => {});
      this.telegramService.sendPhoto(
          this.chat_id[0],
          this.form.get('photo')?.value,
          this.form.get('caption')?.value
        ).subscribe((data) => {});
    } else {
      this.errorMessage = 'text is empty';
    }
  }
  convertible(value: any): any {
    throw new Error('Method not implemented.');
  }
};