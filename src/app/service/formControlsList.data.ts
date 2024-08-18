export const formDataStructureList = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    value: '',
    visible: true,
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
    visible: true,
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
    visible: (form: { email: string | any[] }) =>
      form.email && form.email.length > 3,
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Password is required',
      },
    ],
  },
];
