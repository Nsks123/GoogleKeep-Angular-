import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { ResetComponent } from './Components/reset/reset.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { AuthGuard } from './AuthGuardForHome/authguard.guard';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { NoteiconsComponent } from './Components/noteicons/noteicons.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { GetnoteComponent } from './Components/getnote/getnote.component';
import { TrashComponent } from './Components/trash/trash.component';




const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgetComponent},
  {path:'reset/:token',component:ResetComponent},
  {path:'signin',component:SigninComponent},
  {path:'toolbar',component:ToolbarComponent,
  canActivate:[AuthGuard],
  children:[
    {path:'getnote',component:GetnoteComponent},
    {path:'arch',component:ArchiveComponent},
    {path:'delete',component:TrashComponent}

    ]
  
  },
  {path:'addnote',component:CreatenoteComponent},
  {path:'noteicon',component:NoteiconsComponent},
  {path:'dnote',component:DisplaynoteComponent},
  {path:'arch',component:ArchiveComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
