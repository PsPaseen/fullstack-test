import { useForm } from "react-hook-form"
import { TextField, Button, Box, Typography, Paper } from "@mui/material"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router"
import { useEffect } from "react"

type LoginFormType = {
  username: string
  password: string
}

export const LoginPage = () => {
    const {register,handleSubmit,formState: { errors, isSubmitting }, setError,} = useForm<LoginFormType>()
    const token = localStorage.getItem('accessToken')
    const nav = useNavigate()

    const onSubmit = async (data: LoginFormType) => {
        try {
            const res = await axios.post("http://localhost:4000/login", data)
            const result = res.data

            if (result.accessToken && result.refreshToken) {
                localStorage.setItem('accessToken',result.accessToken)
                localStorage.setItem('refreshToken',result.refreshToken)
                nav('/')
            } else {
                setError("username", { message: "Invalid credentials" })
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid credentials',
                    icon: 'error',
                    confirmButtonText: 'ok'
                    })
            }
        } catch {
            setError("username", { message: "Invalid credentials" })
            Swal.fire({
                    title: 'Error!',
                    text: 'Invalid credentials',
                    icon: 'error',
                    confirmButtonText: 'ok'
                    })
        }
    }
    
    useEffect(() => {
        if(token){
            nav('/')
        }
    },[nav,token])

    return (
        <Box display={'flex'} flexDirection={'column'} sx={{height:'100vh', justifyContent:'center'}}>
            <Paper elevation={3} sx={{ maxWidth: 350, mx: "auto", mt: 8, p: 4 }}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography sx={{textAlign:'center'}} variant="h5" mb={2}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField label="Username" fullWidth margin="normal" {...register("username", { required: "Username is required" })} error={!!errors.username} helperText={errors.username?.message}/>
                    <TextField label="Password" type="password" fullWidth margin="normal" {...register("password", { required: "Password is required" })} error={!!errors.password} helperText={errors.password?.message}/>
                    <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting} sx={{ mt: 2 }}>Login</Button>
                </form>
                </Box>
            </Paper>
        </Box>
    )
}