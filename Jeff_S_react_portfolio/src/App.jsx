import './App.css'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Header from './components/Header'
// import Contact from './pages/Contact';

function App() {


  return (
    <>
    <Header />
    {/* <Navigation /> */}
    <main className='mx-3'>
    <Outlet />
    <h1>body</h1>
    </main>
    <Footer />
    </>
  )
}

export default App
