import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';


const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'posts/list',
    component: PostComponent
  },
  {
    path: 'posts/new',
    component: PostFormComponent
  },
  {
    path: 'posts/edit/:id',
    component: PostFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
