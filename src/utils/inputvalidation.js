const registerOptions = {
  email: {
    required: 'Email is required',
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must have at least 6 characters',
    },
  },
  fullname: {
    required: 'Fullname is required',
    minLength: {
      value: 6,
      message: 'Full name must have at least 6 characters',
    },
  },
}

export default registerOptions
