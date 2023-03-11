import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'
import "./styles/style.scss"

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<CharacterList/>} />
          <Route path='/characters/:id' element={<CharacterDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
