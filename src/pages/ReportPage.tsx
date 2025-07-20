import { Box, Paper, Typography, Divider, Card, CardContent } from "@mui/material"

export const ReportPage = () => {
    return (
        <Box sx={{ mt: 4, px: 2, display: "flex", justifyContent: "center" }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: "100%" }}>
                <Typography variant="h4" gutterBottom color="primary">
                    รายงานระบบ
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                    ตัวอย่างหน้ารายงานสำหรับผู้ใช้งานทุกคน สามารถปรับแต่งข้อมูลรายงานได้ตามต้องการ
                </Typography>
                <Card sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6" color="secondary">สรุปการเข้าใช้งาน</Typography>
                        <ul>
                            <li>จำนวนผู้ใช้งานทั้งหมด: <b>2</b></li>
                            <li>admin: <b>1</b></li>
                            <li>user: <b>1</b></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography variant="h6" color="secondary">หมายเหตุ</Typography>
                        <Typography variant="body2">
                            ข้อมูลนี้เป็น mock data เพื่อแสดงตัวอย่างการออกแบบหน้ารายงาน
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    )
}