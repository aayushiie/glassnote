import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import Readings from './pages/Readings'
import Contact from './pages/Contact'
import M01c01 from './pages/M01c01'
import M01c02 from './pages/M01c02'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/m01c01" element={<M01c01 />} />
        <Route path="/m01c02" element={<M01c02 />} />
      </Routes>
    </BrowserRouter>
  )
}