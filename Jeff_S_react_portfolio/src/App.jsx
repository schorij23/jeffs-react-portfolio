import './App.css'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <>
    <Outlet />
    <h1>test</h1>
    <Header />
    <Footer />
    </>
  )
}

export default App
