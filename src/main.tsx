import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  Home,
  BubbleShooter,
  AdminPanel,
  Projects,
  CodingProblems,
  Blogs,
  ContactUs
} from './pages/index.ts'
import './index.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer.tsx'
import Questions from './pages/Questions.tsx'
import BlogDetails from './pages/BlogDetails.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <NavBar />
      <main className='min-h-screen'>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Projects />} path='/projects' />
          <Route element={<BubbleShooter />} path="/bubble-shooter" />
          <Route element={<AdminPanel />} path="/admin-panel" />
          <Route element={<CodingProblems />} path="/coding-problems" />
          <Route element={<Questions />} path="/coding-problems/:id" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<BlogDetails />} path="/blogs/:id" />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
