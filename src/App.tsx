import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { SideNavBar } from './components/SideNavBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { WithSideNav } from './components/WithSideNav'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<WithSideNav />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <AppRouter/>
    </ThemeProvider>
  )
}

export default App
