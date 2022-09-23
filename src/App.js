import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../src/Components/header/Header'
import Footer from './Components/Footer'
import HomePage from './pages/HomePage'
import DetailSlug from './pages/DetailSlug'
import TripListPage from './pages/TripListPage'
import EverestTrek from './Components/everestTrek/EverestTrek'
import TrekBooking from './Components/everestTrek/TrekBooking'
import About from './Components/About'
import Contact from './Components/Conatct'
import SearchResult from './Components/SearchResult'
import Blog from './Components/Blog'

import axios from 'axios'
window.baseURL = 'http://127.0.0.1:8000/'
window.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/:slug" element={<TripListPage />} /> */}
          <Route path="/:slug" element={<TripListPage />} />
          <Route path="/tour/:id" element={<EverestTrek />} />
          <Route path="/tour/booking" element={<TrekBooking />} />
          {/* <Route path="page/:slug" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/page/:slug" element={<DetailSlug />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
