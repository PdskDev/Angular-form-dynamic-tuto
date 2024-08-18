import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      let controlValidators: any[] = [];

      if (control.validations) {
        control.validations.forEach((validation) => {
          if (validation.validator === 'required')
            controlValidators.push(Validators.required);
          if (validation.validator === 'email')
            controlValidators.push(Validators.email);
        });
      }
      this.myFormControlsGroup[control.name] = [
        control.value || '',
        controlValidators,
      ];
    });

    this.dynamicForm = this.formBuilder.group(this.myFormControlsGroup);
  }

  onSubmit(): void {
    console.log(this.dynamicForm.value);
  }

  getErrorMessage(control: IFormControl) {
    const formControl = this.dynamicForm.get(control.name);

    for (let validation of control.validations) {
      if (formControl?.hasError(validation.name)) {
        return validation.message;
      }
    }
    return '';
  }
}
