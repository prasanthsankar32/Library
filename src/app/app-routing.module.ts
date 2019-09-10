import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {ViewBlogComponent} from './view-blog/view-blog.component';
import {CreateBlogComponent} from './create-blog/create-blog.component';
import {ListBlogComponent} from './list-blog/list-blog.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';


const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'post/:id',
    component : ViewBlogComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    children : [
      {
        path : 'create-blog',
        component : CreateBlogComponent
      },
      {
        path : 'list-blog',
        component : ListBlogComponent
      },
      {
        path: 'edit-blog/:id',
        component : EditBlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
