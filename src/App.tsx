import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Dashboard } from './elements/dashboard/Dashboard'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { WithSideNav } from './components/app/WithSideNav'
import { Table } from './components/Table'
import { Form } from './components/Form'
import { grey } from '@mui/material/colors'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<WithSideNav />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/table" element={<Table/>} />
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: grey[900]
    }
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
