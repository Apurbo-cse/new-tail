
import Sidebar from '../includes/Sidebar'
import Navbar from '../includes/Navber'
import Footer from '../includes/Footer '
import { Outlet } from 'react-router-dom'

export const Master = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        
        <Outlet/>
      </div>
      <Footer />
    </div>
  )
}
