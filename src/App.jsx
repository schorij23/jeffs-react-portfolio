import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
// Main App component responsible for the overall layout.
function App() {


  return (
    <>
    <Header />
    <main className='mx-3'>
       {/* Outlet for rendering child components based on routing */}
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
