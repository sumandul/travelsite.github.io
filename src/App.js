import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../src/Components/header/Header'
import Footer from './Components/Footer'
import HomePage from './pages/HomePage'
import TripListPage from './pages/TripListPage'
import EverestTrek from './Components/everestTrek/EverestTrek'
import TrekBooking from './Components/everestTrek/TrekBooking'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trip" element={<TripListPage />} />
          <Route path="/everest" element={<EverestTrek />} />
          <Route path="/everest/booking" element={<TrekBooking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
