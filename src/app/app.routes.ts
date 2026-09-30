import { Component } from '@angular/core';
import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';
import { Blog } from './components/blog/blog';
import { Home } from './components/home/home';
import { Routes } from '@angular/router';
import { BlogDetails } from './components/blog-details/blog-details';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home,title:'Home'},
    {path:'blog',component:Blog,title:'Blog'},
        {path:'blog/blog-details',component:BlogDetails,title:'Blog Details'},
    // {path:'blog/blog-details/:id',component:BlogDetails,title:'Blog Details'},
    {path:'about',component:About,title:'About'},
    {path:'**',component:NotFound}
];
