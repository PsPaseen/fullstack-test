import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
})

// Interceptor สำหรับ refresh token อัตโนมัติ
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    // ตรวจสอบ error ว่าเป็น 401 และยังไม่ได้ retry
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem("refreshToken")
      if (refreshToken) {
        try {
          const res = await axios.post("http://localhost:4000/refresh", {
            refreshToken,
          })
          console.log('intercepter work!')

          const newAccessToken = res.data.accessToken
          localStorage.setItem("accessToken", newAccessToken)
          // ใส่ access token ใหม่ใน header แล้ว retry request เดิม
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
          return axiosInstance(originalRequest)
        } catch (err) {
          // refresh ไม่สำเร็จ ให้ logout
          console.log('log error from axios:',err)
          localStorage.removeItem("accessToken")
          localStorage.removeItem("refreshToken")
          window.location.href = "/login"
        }
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance