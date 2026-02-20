
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SessionProvider from './providers/SessionProvider'
import LoginPage from './pages/user/Login'
import CallbackPage from './pages/user/Callback'
import CallbackWritePage from './pages/user/Callback/write'
import { ThemeProvider, CssBaseline } from '@mui/material'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from './theme'
import GlobalLoadingPage from './components/GlobalLoadingPage'

const PrivacyPolicy = lazy(() => import('./pages/policy/Privacy'))
const TermsOfService = lazy(() => import('./pages/policy/Terms'))
const PrivateRoute = () => {
  return (
    <SessionProvider>
      <h1>Welcome to the App!</h1>
    </SessionProvider>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InitColorSchemeScript attribute="class" />
      <BrowserRouter>
        <Suspense fallback={<GlobalLoadingPage />}>
          <Routes>
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/callback" element={<CallbackPage />} />
            <Route path="/user/callback/write" element={<CallbackWritePage />} />
            <Route path="/policy/privacy" element={<PrivacyPolicy />} />
            <Route path="/policy/terms" element={<TermsOfService />} />
            <Route path="/*" element={<PrivateRoute />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
