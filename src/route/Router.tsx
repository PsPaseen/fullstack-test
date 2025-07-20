import { ReportPage } from "../pages/ReportPage";
import { ManagePage } from "../pages/ManagePage";
import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { AdminRoute } from "./AdminRoute";
import { ProtectedRoute } from "./ProtectedRoute";



export const Router = () => {
  return (
  <Routes>
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>} >
          <Route index element={<MainPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/manage-roles"element={<AdminRoute><ManagePage /></AdminRoute>}/>
          <Route path="*" element={<div>404 not found</div>} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
  </Routes>
  )
}