import { IFormValidation } from './form-validation.model';

export interface IFormControl {
  type: string;
  label: string;
  name: string;
  value: string;
  validations: IFormValidation[];
}
