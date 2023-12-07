import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector:'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[CommonModule,RouterOutlet, NavbarComponent],
})
export class AppComponent {
  name : string = "hana";
  age : number = 21;
  isShown: boolean = true;
  

  printEvent(e: any){
    console.log(e);
  }
  
  onHandleFocus(e: any){
    console.log(e);
  }
  onHandleGhoti(e: any){
    console.log(e);
  }

  getName(): string{
    return this.name;
  }

  ngOnInit(): void{
    setTimeout(() => {
      this.isShown= false;
    }, 5000)
  }









}
