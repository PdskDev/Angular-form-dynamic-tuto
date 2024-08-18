import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlsService } from '../service/form-controls.service';
import { IFormControl } from '../models/form-control.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  myFormControlsGroup: any = {};
  formStructure: IFormControl[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormControlsService
  ) {}
  ngOnInit(): void {
    this.formStructure = this.formService.getFormStructure();

    this.formStructure.forEach((control) => {
      this.myFormControlsGroup[control.name] = [control.value || ''];
    });

    this.dynamicForm = this.formBuilder.group(this.myFormControlsGroup);
  }
}
