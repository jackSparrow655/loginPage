import {createContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

  
  
  export const AuthContext = createContext()
  
  const AuthContextProvider =({children}) => {
    
    const url = 'http://localhost:4000/api/v1'
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    
    const submitHandlerSignUp = async(e, formData) => {
        e.preventDefault()
        if(formData.password !== formData.confirmPassword){
            toast.error("password do not match")
            return
        }
        try{
            const response = await axios.post(`${url}/signup`, formData)
            toast.success(response.data.message)
            navigate('/dashboard')
            setIsLoggedIn(true)
        } catch(err){
            console.log(err)
            toast.error(err.response.data.message)
        }
    }
    
    const submitHandlerLogin =async(e, formData) => {
        e.preventDefault()
        try{
            const response = await axios.post(`${url}/login`, formData)
            toast.success(response.data.message)
            setIsLoggedIn(true)
            navigate('/dashboard')
        } catch(err){
            toast.error(err.response.data.message)
        }
    }
    
    
    const constextValue = {
        isLoggedIn,
        setIsLoggedIn,
        url,
        submitHandlerSignUp,
        submitHandlerLogin
        
    }
    
    return <AuthContext.Provider value={constextValue}>
        {children}
    </AuthContext.Provider>
  }
  
  
  export default AuthContextProvider