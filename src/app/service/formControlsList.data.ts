export const formDataStructureList = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Name is required',
      },
    ],
  },
  {
    type: 'email',
    label: 'Email',
    name: 'email',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Email is required',
      },
      {
        name: 'pattern',
        validator: 'email',
        message: 'Invalid email format',
      },
    ],
  },
  {
    type: 'password',
    label: 'Password',
    name: 'password',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Password is required',
      },
    ],
  },
];
