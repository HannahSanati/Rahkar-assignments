import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() set getTodoText(value: string){
this._getTodotext = value;
 if (this._getTodotext)
      this.textList.push({ title: this._getTodotext, done: false });
  
  }
   _getTodotext!: string;
  textList: any[] = [];

  ngOnChanges() {
    if (this.getTodoText)
      this.textList.push({ title: this.getTodoText, done: false });
  }
  taskDone(index: number) {
this.textList[index].done=!this.textList[index].done;
  }
  taskRemove(index: number) {
    this.textList.splice(index, 1)
  }
}
