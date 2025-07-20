import { Navigate } from "react-router"

interface ProtectedRouteProps {
    children : React.ReactNode
}

export const ProtectedRoute = (props : ProtectedRouteProps) => {
    const {children} = props
    const accessToken = localStorage.getItem('accessToken')

    if (!accessToken) {
       return <Navigate to="/login"/>
    }
    return children
}