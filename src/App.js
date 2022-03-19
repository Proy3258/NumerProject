import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { RootOfEq } from './RootOfEq/RootOfEq'
import { Bisection } from './RootOfEq/Bisection'
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rootofequations" element={<RootOfEq />} />
            <Route path="/bisection" element={<Bisection />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App