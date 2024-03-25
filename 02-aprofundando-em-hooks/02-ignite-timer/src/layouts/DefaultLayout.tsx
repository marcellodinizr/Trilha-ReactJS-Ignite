import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* This is where the child routes will be rendered */}
    </div>
  )
}
