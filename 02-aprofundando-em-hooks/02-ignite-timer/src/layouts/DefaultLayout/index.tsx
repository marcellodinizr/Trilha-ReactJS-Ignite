import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet /> {/* This is where the child routes will be rendered */}
    </LayoutContainer>
  )
}
