import {useState, useEffect } from 'react'
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

// global state and useNavigate later

const initalState = {
  name: '', 
  email: '', 
  password: '', 
  isMember: true, 
  showAlert: false,
}

// if possible, prefer local state over global state

function Register() {
  const [values, setValues ] = useState(initalState)
  // global state and useNavigate


  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return <Wrapper className='full-page'>
    <form className='form' onSubmit={onSubmit}>
      <Logo />
      <h3>Login</h3>

       { values.showAlert && <Alert />}
      <div className='form-row'>
        {/* Name input */}
        <FormRow 
          type="text" 
          name="name" 
          value={values.name} 
          handleChange={handleChange} 
        />

        {/* email input */}
        <FormRow 
          type="email" 
          name="email" 
          value={values.email} 
          handleChange={handleChange} 
        />

        {/* password input */}
        <FormRow 
          type="password" 
          name="password" 
          value={values.password} 
          handleChange={handleChange} 
        />
         <button type='submit' className='btn btn-block'>
          submit
         </button>
      </div>
    </form>
  </Wrapper>

}

export default Register