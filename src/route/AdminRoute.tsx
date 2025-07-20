import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../utils/axiosInstance"
import Swal from "sweetalert2"

interface AdminRouteProps {
    children : React.ReactNode
}

export const AdminRoute = (props : AdminRouteProps) => {
    const {children} = props
    const accessToken = localStorage.getItem("accessToken")
    const nav = useNavigate()

    const checkAdmin = useCallback (async() => {
            try {
                const res = await axiosInstance.post("/manage-page", {}, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                })
                
                console.log('checkAdmin !',res.data.allow)
                if(res.data.allow == true){
                    console.log('allow true')
                }else if (res.data.allow == false){
                    console.log('allow false')
                    Swal.fire({
                        title: 'Error!',
                        text: 'Permission Deny',
                        icon: 'error',
                        confirmButtonText: 'ok'
                        })
                    return nav('/')
                }else{
                    console.log('allow other')
                    Swal.fire({
                        title: 'Error!',
                        text: 'Permission Deny',
                        icon: 'error',
                        confirmButtonText: 'ok'
                        })
                    return nav('/')
                }
            } catch {
                console.log('allow error')
                Swal.fire({
                        title: 'Error!',
                        text: 'Permission Deny',
                        icon: 'error',
                        confirmButtonText: 'ok'
                        })
                return nav('/')
            }
        },[accessToken, nav])

    useEffect(() => {
        checkAdmin()
    }, [checkAdmin])

    //ถ้า checkAdmin ผ่านจะ return children
    return children
}