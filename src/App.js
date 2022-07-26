import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './pages/HomePage'
import TripListPage from './pages/TripListPage'
import EverestTrek from './Components/everestTrek/EverestTrek'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trip" element={<TripListPage />} />
          <Route path="/everest" element={<EverestTrek />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
