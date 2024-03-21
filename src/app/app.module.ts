import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { ResetComponent } from './Components/reset/reset.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SigninComponent } from './Components/signin/signin.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { AuthService } from './Services/auth/auth.service';
import { NoteiconsComponent } from './Components/noteicons/noteicons.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { GetnoteComponent } from './Components/getnote/getnote.component';
import {MatCardModule} from '@angular/material/card';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchiveComponent } from './Components/archive/archive.component';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './Components/trash/trash.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    ResetComponent,
    SigninComponent,
    SidenavComponent,
    ToolbarComponent,
    CreatenoteComponent,
    NoteiconsComponent,
    DisplaynoteComponent,
    GetnoteComponent,
    UpdatenoteComponent,
    ArchiveComponent,
    TrashComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
         
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthService
    
  ],
  bootstrap: [
    AppComponent
    
  ]
})
export class AppModule { }
