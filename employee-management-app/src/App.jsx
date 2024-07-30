import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Link, Route, Routes } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent/>} /></Routes>
      </Router>
    </>
  )
}

export default App
