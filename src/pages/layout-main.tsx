import { Outlet } from 'react-router'

export function LayoutMain() {
  return (
    <div>
      <h1>Layout Main</h1>
      <Outlet/>
    </div>
  )
}