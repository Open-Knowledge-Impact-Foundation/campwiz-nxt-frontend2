
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SessionProvider from './providers/SessionProvider'
import LoginPage from './pages/user/Login'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
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
      <BrowserRouter>
        <Routes>
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/*" element={<PrivateRoute />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
