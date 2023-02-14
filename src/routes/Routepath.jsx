import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Layout } from '../components'
import { Welcome, Register } from '../pages'

export default function Routepath() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path='register' element={<Register />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
