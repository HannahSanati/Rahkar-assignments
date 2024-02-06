import { Component } from '@angular/core';
import { UsernameService } from '../../../username.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
 constructor( private usernameservice: UsernameService,){}
}
