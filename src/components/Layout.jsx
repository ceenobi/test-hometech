import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='bg'>
      <Outlet />
      </div>
    </>
  )
}
