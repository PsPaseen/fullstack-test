import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axiosInstance from "../utils/axiosInstance"


export const Topbar = () => {
    const [menus, setMenus] = useState<{ name: string, path: string, visible: boolean }[]>([])
    const accessToken = localStorage.getItem("accessToken")
    const nav = useNavigate()

    const onLogout = useCallback(() => {
        const refreshToken = localStorage.getItem("refreshToken")
        if (refreshToken) {
            axiosInstance.post("/logout", { refreshToken })
        }
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("role")
        localStorage.removeItem("username")

        nav('/login')
    },[nav])

     const fetchMenus = useCallback(async () => {
        if (!accessToken) return
        try {
            const res = await axiosInstance.post("/menus", {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            setMenus(res.data.menus || [])
        } catch {
            setMenus([])
        }
    }, [accessToken])


    useEffect(() => {
            fetchMenus()
    },[fetchMenus])

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                FullteamTech System
                </Typography>
                <Box>
                    {menus.filter((menu) => (menu.visible == true)).map((menu)=> (menu.name == "ออกจากระบบ" 
                        ? <Button key={menu.path} color="inherit" onClick={onLogout}>{menu.name}</Button>
                        : <Button key={menu.path} color="inherit" onClick={() => {nav(menu.path)}}>{menu.name}</Button> ))}
                </Box>
            </Toolbar>
    </AppBar>
    )
}