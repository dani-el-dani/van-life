
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Nav(){
  return(
    <div className="nav">
      <h1><Link to="/">#VANLIFE</Link></h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/about">vans</Link></li>
      </ul>
    </div>
  )
    
}

function Home(){
  return(
    <>
      <Nav />
      <h1>This is Home Page</h1>
    </>
    
  )
}

function About(){
  return(
    <>
      <Nav />
      <h1>This is about Page</h1>
    </>
  )
}

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  </BrowserRouter>  
  )
}

export default App
