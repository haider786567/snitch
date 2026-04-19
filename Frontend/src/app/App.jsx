import './App.css'
import { RouterProvider } from 'react-router'
import { routes } from './app.route.jsx'
import { useAuth } from "../Features/auth/hook/useAuth.js"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'



function App() {
  const { handleGetMe } = useAuth()
  const user = useSelector(state => state.auth.user)

  useEffect(() => {
    if (!user) {
      handleGetMe()
    }
  }, [])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App