import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UsernameService } from './../username.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private usernameservice: UsernameService,
    private fb: FormBuilder,
  ) {}

  form = this.fb.group({
    username: [''],
    password: [''],
  });

  onClick() {
      let a = this.usernameservice.Register(
      this.form.value
      );
   
  }
  
}
