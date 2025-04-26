import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AdminLayout from './components/AdminLayout.jsx'

// Sample Dashboard component for testing AdminLayout
const Dashboard = () => (
  <div className="p-6 bg-white rounded-xl shadow-sm">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welcome to the admin dashboard</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <AdminLayout activeMenu="Dashboard" setActiveMenu={() => {}}>
              <Dashboard />
            </AdminLayout>
          } 
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
