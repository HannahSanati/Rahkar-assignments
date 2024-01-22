import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextComponent } from './text/text.component';
import { ListComponent } from './list/list.component';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, TextComponent, ListComponent],
})
export class AppComponent {
  childOutputValue!: string;
  constructor(private todoServie: TodoService) {
    this.getData();
  }
  getChildOutput(event: string) {
    this.childOutputValue = event;
  }
  getData() {
    this.todoServie.getValue().subscribe({
      next: (value) => {
        this.childOutputValue = value;
        console.log(this.childOutputValue);
      },
    });
  }
}
