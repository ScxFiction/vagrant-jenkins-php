import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  builderOptions:string[] = [
    'Composer', 'NPM', 'Bower', 'Grunt', 'Gulp'
  ];
  selectedBuilders: string[] = [];
  builder:string = '';

  constructor() { }

  ngOnInit() {
    
  }

  onAddBuilder(builder: string) {
    this.selectedBuilders.push(builder);
    this.builderOptions.splice(this.builderOptions.indexOf(builder), 1);
    this.builder = '';
  }

  onRemoveBuilder(builder: string) {
    this.selectedBuilders.splice(this.selectedBuilders.indexOf(builder), 1);
    this.builderOptions.push(builder);
  }

  onSubmit() {
    console.log('Renato e Cristina');
  }

}
