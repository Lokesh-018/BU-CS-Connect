import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BatchDetails from './components/BatchDetails';
import AlumniDirectory from './components/AlumniDirectory';
import StudentProfile from './components/StudentProfile';
import Event from './components/Event';
import EventDetails from './components/EventDetails';
import Memories from './pages/Memories';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import AlumniStories from './pages/AlumniStories';
import ViewAllAlumni from './components/ViewAllAlumni';
import ViewAllAwards from './components/ViewAllAwards';
import ViewAllTestimonials from './components/ViewAllTestimonials';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/alumni-directory" element={<AlumniDirectory />}/>
            <Route path="/batch/:programName/:year" element={<BatchDetails />} />
            <Route path="/profile/:studentName" element={<StudentProfile />} />
            <Route path="/events" element={<Event/>} />
            <Route path="/event/:eventId" element={<EventDetails />} />
            <Route path="/upcoming-event/:eventId" element={<EventDetails />} />
            <Route path="/memories" element={<Memories/>}/>
            <Route path="/gallery/:title" element={<Gallery />} />
            <Route path='/blog' element={<Blog/>} />
            <Route path="/alumni-stories" element={<AlumniStories />} />
            <Route path="/all-alumni" element={<ViewAllAlumni />} />
            <Route path="/all-awards" element={<ViewAllAwards />} />
            <Route path="/all-testimonials" element={<ViewAllTestimonials />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
