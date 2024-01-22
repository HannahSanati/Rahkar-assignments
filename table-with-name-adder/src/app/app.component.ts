import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule , ReactiveFormsModule , FormControl , FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  form!: FormGroup
  searchText = '';

  constructor(private fb:FormBuilder) {
    this.form = fb.group ({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      mobile : new FormControl(''),
      email : new FormControl('')
    })
   
  }
  Users : any[] = []
  serachedUser : any[] = []


  onClick() {
    this.Users.push({
      fname : this.form.value.firstname ,
      lname : this.form.value.lastname ,
      mobile : this.form.value.mobile ,
      email : this.form.value.email
    })
    this.serachedUser = this.Users
    this.form.setValue ({
      firstname : '',
      lastname : '',
      mobile : '',
      email : ''
    })
  }

  deletData(index : number) {
    this.Users.splice(index,1)
  }

  doSearch() {
   this.Users = this.Users.filter(item => item.fname === this.searchText)
  }

  searchChange(event: string) {
    if(event){
      this.serachedUser = this.Users.filter(item => item.fname === this.searchText)
    } else {
      this.serachedUser = this.Users
    }
  }
}

