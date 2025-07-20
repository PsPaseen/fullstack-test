import { Box, Card, CardContent, Divider, Paper, Typography } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"

export const MainPage = () => {
    const role = localStorage.getItem('role')
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() =>{
        if(!role){
            axios.post("http://localhost:4000/me", {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(res => {
                    localStorage.setItem('role', res.data.role)
                    localStorage.setItem('username', res.data.username)
                    console.log('added role to local!')
            })
        }
    },[role, accessToken])

    return (
    <Box sx={{ mt: 4, px: 2, display: "flex", justifyContent: "center" }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: "100%" }}>
                <Typography variant="h4" gutterBottom color="primary">
                    ระบบแสดงเมนูตามสิทธิ์ผู้ใช้งาน
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                    ตัวอย่างระบบนี้จะเปลี่ยนเมนูตามสิทธิ์ของผู้ใช้งานที่ล็อกอินเข้ามา
                </Typography>
                <Card sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6" color="secondary">Stack ที่ใช้งาน</Typography>
                        <ul>
                            <li>React + Vite</li>
                            <li>MUI (Material UI)</li>
                            <li>React Router</li>
                            <li>Axios</li>
                            <li>JWT Authentication</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography variant="h6" color="secondary">ฟีเจอร์หลัก</Typography>
                        <ul>
                            <li>Login / Logout</li>
                            <li>Refresh Token อัตโนมัติ</li>
                            <li>แสดงเมนูตามสิทธิ์</li>
                            <li>ป้องกันการเข้าถึงเมนูที่ไม่มีสิทธิ์</li>
                        </ul>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    )
    
}