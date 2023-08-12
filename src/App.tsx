import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { SideNavBar } from './components/SideNavBar'

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
        
      <Route element={<SideNavBar />}>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/about" element={<About/>} />
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
