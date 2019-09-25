import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { BuilderComponent } from './form/builder/builder.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    BuilderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  //  NgbDropdown,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent,
    FormComponent,
   // NgbDropdown
  ]
})
export class ProjectsModule { }
