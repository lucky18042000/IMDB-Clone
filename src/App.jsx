import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import MovieList from './pages/MovieList'
import Navbar from './Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/movie/:id'element={<MovieDetails/>}></Route>
        <Route path='/movies/:type'element={<MovieList/>}></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App
