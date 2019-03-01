import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
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
    BsDropdownModule,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent,
    FormComponent,
    BsDropdownModule
  ]
})
export class ProjectsModule { }
