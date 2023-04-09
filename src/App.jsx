import { Routes, Route } from 'react-router-dom'

import MainContainer from './pages/mainPage/container'
import SearchContainer from './pages/searching/container'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainContainer />} />
      <Route path='/search' element={<SearchContainer />} />
    </Routes>
  )
}

export default App
