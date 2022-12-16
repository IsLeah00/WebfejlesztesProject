import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';

const routes: Routes = [
  {path: 'subject', component: SubjectListComponent},
  {path: 'create-subject', component: CreateSubjectComponent},
  {path: '', redirectTo: 'subject', pathMatch: 'full'},
  {path: 'update-subject/:id', component: UpdateSubjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
