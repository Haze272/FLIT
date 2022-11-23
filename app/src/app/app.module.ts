import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/navigation/header/header.component';
import { SidenavComponent } from './shared/components/navigation/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule} from "@angular/forms";
import { TaskComponent } from './pages/home/components/task/task.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { AuthModalComponent } from './shared/components/auth-modal/auth-modal.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { TagContainerComponent } from './shared/components/tag-container/tag-container.component';
import { ToastComponent } from './shared/components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    TaskComponent,
    TaskDetailComponent,
    AuthModalComponent,
    CheckboxComponent,
    TagContainerComponent,
    ToastComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
