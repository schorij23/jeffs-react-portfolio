import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <>
    <Navigation />
    <main className='mx-3'>
    <Outlet />
    <h1>test</h1>
    <Header />
    <Footer />
    </main>
    </>
  )
}

export default App
