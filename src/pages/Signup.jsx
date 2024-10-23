import React from 'react'
import signupImg from '../assests/signup.png'
import Template from '../components/Template'

const Signup = () => {
  return (
    <Template
        title="Welcome back"
        des1="Build Skill for today, Tomorrow and beyond"
        des2="Education to Future proof"
        image={signupImg}
        formType="signup"
    />
  )
}

export default Signup
