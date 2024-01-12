import { Routes } from '@angular/router';
import { TextareaComponent } from './textarea/textarea.component';
import { DiariesComponent } from './diaries/diaries.component';

export const routes: Routes = [
    {
      path: '',
      component: TextareaComponent,
      children: [
        { path: 'Diaries', 
        component: DiariesComponent },
      ],
    },
  ];
  