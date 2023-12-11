import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
          { path: 'Home', 
          component: HeaderComponent },
          {
            path: 'About',
            component: AboutComponent,},
          {
            path: 'Skill',
            component: SkillComponent,},
          {
             path: 'Contact',
           component: ContactComponent },
          ]
      },
];
