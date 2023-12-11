import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', 
      component: LoginComponent },
      {
        path: 'products',
        loadComponent: () => import ('./product/product.component').then((m)=> m.ProductComponent)
      },
      {
        path: 'products/:id',
        loadComponent: () => import ('./product/product-details/product-details.component').then((m)=> m.ProductDetailsComponent)
      },
      {
         path: 'profile',
       component: ProfileComponent },
       {
        path: 'Aboutus',
        component: AboutusComponent },
    ],
  },
];
