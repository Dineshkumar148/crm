import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { Component } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'myproducts',
        component: MyProductsComponent,
        children: [
            {
                path: 'add-product',
                component: AddProductComponent,
            },
            {
                path: 'product-details',
                component: ProductDetailsComponent,
            }
        ]
    },
    // {
    //     path: 'add-product',
    //     component: AddProductComponent,
    // },
    // {
    //     path: 'product-details',
    //     component: ProductDetailsComponent,
    // },
    {
        path: '**',
        redirectTo: '/login',
    },
];
