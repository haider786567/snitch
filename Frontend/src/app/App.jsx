import './App.css'
import { RouterProvider } from 'react-router'
import { routes } from './app.route.jsx'
import { useAuth } from "../Features/auth/hook/useAuth.js"
import { useEffect } from 'react'



function App() {
  const { handleGetMe } = useAuth()

  useEffect(() => {
      handleGetMe()
  }, [])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App