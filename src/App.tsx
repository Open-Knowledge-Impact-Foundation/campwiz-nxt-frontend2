
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SessionProvider from './providers/SessionProvider'
import LoginPage from './pages/user/Login'
const PrivateRoute = () => {
  return (
    <SessionProvider>
      <h1>Welcome to the App!</h1>
    </SessionProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/*" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
