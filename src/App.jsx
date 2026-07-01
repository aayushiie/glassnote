import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import Readings from './pages/Readings'
import Contact from './pages/Contact'
import M01c01 from "./posts/m01c01.mdx"
import M01c02 from "./posts/m01c02.mdx"
import M02c01 from './posts/m02c01.mdx'


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
        <Route path="/m02c01" element={<M02c01 />} />
      </Routes>
    </BrowserRouter>
  )
}