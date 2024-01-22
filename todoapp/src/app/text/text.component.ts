import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  recive: string = '';

  constructor(private todoService: TodoService) {}

  click() {
    this.todoService.setValue(this.recive);
    console.log(this.recive);
    
  }
}
