import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  jobForm: FormGroup;
  private subscription: Subscription;
  
  constructor(private projectService: ProjectService) { 
    this.jobForm = new FormGroup({
      jobname: new FormControl(null, Validators.required),
      checkstyle: new FormControl(null, Validators.required),
      phpunit: new FormControl(null, Validators.required),
      phpcpd: new FormControl(null, Validators.required),
      phpdox: new FormControl(null, Validators.required),
      phploc: new FormControl(null, Validators.required),
      phpdepend: new FormControl(null, Validators.required),
      phpmd: new FormControl(null, Validators.required),
      builders: new FormControl(),
      builder: new FormArray([]),
      userBuilder: new FormGroup({})
    }); 
    this.subscription = this.projectService.buildersChanged
      .subscribe(
        (builder: {name: string, action: string}) => {
          if(builder.action == 'add'){
            const control = new FormControl(null);
            (<FormGroup>this.jobForm.get('userBuilder')).addControl(builder.name, control);
          } else {
            this.jobForm.removeControl(builder.name);
          }
        }
      ); 
    console.log(this.jobForm);
  }



  onSubmit() {
    console.log(this.jobForm.value);
  }

}
