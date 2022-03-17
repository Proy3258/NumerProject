import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { RootOfEq } from './RootOfEq/RootOfEq'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rootofequation" element={<RootOfEq />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App