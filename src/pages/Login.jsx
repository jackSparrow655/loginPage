import React from 'react'
import Template from '../components/Template'
import loginImg from '../assests/login.png'

const Login = () => {
  return (
    <Template
        title="Welcome back"
        des1="Build Skill for today, Tomorrow and beyond"
        des2="Education to Future proof"
        image={loginImg}
        formType="login"
    />
  )
}

export default Login
