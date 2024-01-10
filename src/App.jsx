import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Listen from './pages/Listen'
import TheGirls from './pages/TheGirls'
import Follow from './pages/Follow'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/the-girls" element={<TheGirls />} />
          <Route path="/follow" element={<Follow />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
