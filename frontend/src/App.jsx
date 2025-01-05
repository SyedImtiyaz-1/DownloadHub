import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Youtube from './platforms/youtube'
import Instagram from './platforms/instagram'
import Twitter from './platforms/twitter'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Youtube />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/twitter" element={<Twitter />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App