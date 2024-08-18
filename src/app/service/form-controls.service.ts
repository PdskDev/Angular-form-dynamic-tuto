import { Injectable } from '@angular/core';
import { formDataStructureList } from './formControlsList.data';
import { IFormControl } from '../models/form-control.model';

@Injectable({
  providedIn: 'root',
})
export class FormControlsService {
  constructor() {}

  getFormStructure(): IFormControl[] {
    return formDataStructureList;
  }
}
