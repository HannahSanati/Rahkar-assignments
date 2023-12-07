import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Output() lastName = new EventEmitter();
profilForm = new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
})
onHandleFirstName(event: any){
  console.log(this.profilForm.controls.firstName.value);
  
}
onHandleLastName(event: any){
  
}
onClick(){
  this.lastName.emit(this.profilForm.controls.lastName.value)
}

}
