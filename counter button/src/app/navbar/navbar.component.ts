import { Component,Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  @Input() baste : any;
  @Output() ghoti = new EventEmitter();

counter: number= 0;

onClick(){
  this.counter = this.counter +1;
  this.ghoti.emit(this.counter)
}


ngOnDestroy(){
  console.log("man terekidam");
  
}

}
