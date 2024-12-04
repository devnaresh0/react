import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} =useForm()
    const [error,setError] = useState("")
    const login = async(data) => {
        setError("")
        try {
          const session =  await authService.login(data)
          if(session) {
            const userData = await authService.getCurruntUser()
            if(userData) dispatch(authLogin(userData));
            navigate("/")
          }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full'
    >
    </div>
  )
}

export default Login