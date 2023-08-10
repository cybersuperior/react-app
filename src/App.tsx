import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'

const About = () => {

  return (
    <>
      This is the about page
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
