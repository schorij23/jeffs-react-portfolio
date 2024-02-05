import './app.css'
import './index.css'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <>
    <Header />
    <main className='mx-3'>
    <Outlet />
    {/* <h1>body</h1> */}
    </main>
    <Footer />
    </>
  )
}

export default App
