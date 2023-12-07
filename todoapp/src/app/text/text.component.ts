import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Output() sendtext = new EventEmitter<string>()
  recive:string=""
onChangeTodo(event: any) {
this.recive=event.target.value
}
sendEvent() {
this.sendtext.emit(this.recive)
}
}
