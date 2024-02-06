import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { BudgetSectionComponent } from './budget-section/budget-section.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', 
      component: LoginComponent },
      {
         path: 'profile',
       component: ProfileComponent },
       {
        path: 'Expense',
        component: ExpensesComponent },
        {
          path: 'Budget',
          component: BudgetSectionComponent },
    ],
  },
];
