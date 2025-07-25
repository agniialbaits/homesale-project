import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage'
import HomePage from './Pages/HomePage';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
    </Router>
  )
}

export default App
