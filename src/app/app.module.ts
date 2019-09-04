import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostsService} from './services/posts.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
