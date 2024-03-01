import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Dashboard } from './elements/dashboard/Dashboard'
import { ThemeProvider } from '@mui/material/styles'
import { WithSideNav } from './components/app/WithSideNav'
import { Table } from './elements/table/Table'
import { Form } from './elements/form/Form'
import { theme } from './theme'

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

declare module "@mui/material/styles" {
  interface Palette {
    charts: {
      titleColor: string
      purple: Palette["primary"]
      deepOrange: Palette["primary"]
      blue: Palette["primary"]
      green: Palette["primary"]
    }
  }
  interface PaletteOptions {
    charts: {
      titleColor: string
      purple: PaletteOptions["primary"]
      deepOrange: PaletteOptions["primary"]
      blue: PaletteOptions["primary"]
      green: PaletteOptions["primary"]
    }
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <AppRouter/>
    </ThemeProvider>
  )
}

export default App
