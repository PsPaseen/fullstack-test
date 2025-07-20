import { Box } from "@mui/material"
import { Topbar } from "../components/Topbar"
import { Outlet } from "react-router"

export const Layout = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Topbar />
            <Outlet />
        </Box>
    )
}