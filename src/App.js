import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import { PublicRoute } from './views/pages/login/PublicRoute'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

const App = () => {
  const isAuthenticated = localStorage.getItem('isApproved')
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route
            exact
            path="/login"
            name="Login Page"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          {/* <Route path="*" name="Home" element={<DefaultLayout />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
