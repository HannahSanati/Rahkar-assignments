import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itaskdata } from '../typings/taskesgetdata.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Itaskdata;
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() done = new EventEmitter();
}