import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import './index.css'


function App() {

  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default App
