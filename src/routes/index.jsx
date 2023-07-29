import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import { Layout } from '../containers/Layout'
import Home from '../pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='*' element={<h1> nada</h1>} />
      </Routes>
    </Router>
  )
}

export default App
