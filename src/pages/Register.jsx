import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { ImEyeBlocked } from 'react-icons/im'
import { Stepper } from 'react-form-stepper'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import registerOptions from '../utils/inputvalidation'

const header = {
  height: '24px',
  color: '#0076A7',
  fontSize: '24px',
  lineHeight: '24px',
  fontWeight: 700,
}
const text = {
  height: '48px',
  width: '284px',
  color: '#8E8E8E',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
}

const textB = {
  color: '#0076a7',
  fontWeight: 700,
}

const steps = ['1', '2', '3']

export default function Register() {
  const [activeStep, setActiveStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmpassword: '',
      username: '',
    },
  })
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const handleError = (errors) => {}

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    await axios
      .post(
        'https://home-tech.vercel.app/api/register',
        { fullName: data.fullname, email: data.email, password: data.password }
      )
      .then((user) => {
        // toast.success('Account created Successfully')
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch((error) => {
        console.log(error.message)
        // toast.error(error.message)
      })
    setIsSubmitting(false)
  }

  const nextStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep + 1)
  const backStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep - 1)

  return (
    <div className='register text-center d-flex flex-column justify-content-center align-items-center'>
      <div className='layout'>
        <div className='d-flex gap-5 '>
          <AiOutlineArrowLeft size='1.5rem' onClick={() => navigate(-1)} />
          <div className='text-center'>
            <h1 style={header}>Create an Account</h1>
            <p style={text}>
              Fill in your details below to create an account with us
            </p>
          </div>
        </div>
        <Stepper
          activeStep={activeStep}
          steps={steps}
          // inactiveBgColor='#0076a7'
        ></Stepper>
        <FormProvider {...methods}>{/* errors */}</FormProvider>
        <Form
          className='mt-3 mx-auto mb-5'
          style={{ width: '400px' }}
          onSubmit={handleSubmit(onSubmit, handleError)}
        >
          <Form.Group
            className='mb-3 position-relative'
            controlId='exampleForm.ControlInput1'
          >
            <Form.Control
              type='text'
              placeholder='Full name'
              size='lg'
              className='styleinput'
              {...register('fullname', registerOptions.fullname)}
            />
            <BsPerson
              className='position-absolute top-50 end-0 translate-middle'
              style={{ color: '#0076a7', fontSize: '20px' }}
            />
            {errors?.fullname && (
              <p className='text-danger text-sm text-start'>
                {errors.fullname.message}
              </p>
            )}
          </Form.Group>
          <Form.Group
            className='mb-3 position-relative'
            controlId='exampleForm.ControlInput2'
          >
            <Form.Control
              type='email'
              placeholder='Email address'
              size='lg'
              className='styleinput'
              {...register('email', registerOptions.email)}
            />
            <HiOutlineMail
              className='position-absolute top-50 end-0 translate-middle'
              style={{ color: '#0076a7', fontSize: '20px' }}
            />
            {errors?.email && (
              <p className='text-danger text-sm text-start'>
                {errors.email.message}
              </p>
            )}
          </Form.Group>
          <Form.Group
            className='mb-3 position-relative'
            controlId='exampleForm.ControlInput3'
          >
            <Form.Control
              type='password'
              placeholder='******'
              size='lg'
              className='styleinput'
              {...register('password', registerOptions.password)}
            />
            <ImEyeBlocked
              className='position-absolute top-50 end-0 translate-middle'
              style={{ color: '#0076a7', fontSize: '20px' }}
            />
            {errors?.password && (
              <p className='text-danger text-start text-sm'>
                {errors.password.message}
              </p>
            )}
          </Form.Group>
          <button className='btnA mt-4' type='submit'>
            {isSubmitting ? 'Loading' : 'Next'}
          </button>
        </Form>

        <p className='mb-4'>
          Already have an account{' '}
          <span style={textB}>
            <Link to='/signin'>Sign in</Link>
          </span>
        </p>
        <div className='d-flex justify-content-between mt-5'>
          <p className='text-start fw-bold'>Privacy and Policy</p>
          <p className='text-end fw-bold'>FAQ</p>
        </div>
      </div>
    </div>
  )
}
