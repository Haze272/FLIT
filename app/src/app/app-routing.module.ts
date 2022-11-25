import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { TaskDetailComponent } from "./pages/task-detail/task-detail.component";
import { ProfileComponent } from "./pages/profile/profile.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks/:taskId', component: TaskDetailComponent },
  { path: 'users/:userId', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
