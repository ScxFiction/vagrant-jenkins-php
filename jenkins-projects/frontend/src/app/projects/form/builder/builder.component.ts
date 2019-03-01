import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  
  builderOptions:string[] = [
    'Composer', 'NPM', 'Bower', 'Grunt', 'Gulp'
  ];
  selectedBuilders: string[] = [];
  @Input() basicForm: FormGroup;

  constructor(private projectService: ProjectService) {
    this.basicForm = new FormGroup({
      builders: new FormControl()
    });
    
  }
  
  ngOnInit() {
    this.basicForm.patchValue({
      builders: '' 
    });
  }

  onAddBuilder(builder: string) {
    this.selectedBuilders.push(builder);
    this.builderOptions.splice(this.builderOptions.indexOf(builder), 1);
    this.basicForm.patchValue({
      builders: '' 
    });
    this.projectService.addBuilder(builder.toLowerCase());
  }

  onRemoveBuilder(builder: string) {
    this.selectedBuilders.splice(this.selectedBuilders.indexOf(builder), 1);
    this.builderOptions.push(builder);
    this.projectService.removeBuilder(builder.toLowerCase());
  }
  

}
