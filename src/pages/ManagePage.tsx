import { Box, Paper, Typography, Divider, Card, CardContent } from "@mui/material"

// admin only
export const ManagePage = () => {
    return (
        <Box sx={{ mt: 4, px: 2, display: "flex", justifyContent: "center" }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: "100%" }}>
                <Typography variant="h4" gutterBottom color="primary">
                    จัดการสิทธิ์ (Admin Only) :D
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                    หน้านี้สำหรับผู้ดูแลระบบ (admin) เท่านั้น
                </Typography>
                <Card>
                    <CardContent>
                        <Typography variant="h6" color="secondary">Mock Data</Typography>
                        <ul>
                            <li>admin เห็นหน้านี้ได้แค่คนเดียวว</li>
                            <li>user จะถูก redirect ออกเมื่อเข้าหน้านี้</li>
                        </ul>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    )
}