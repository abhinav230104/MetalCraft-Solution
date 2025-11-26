import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainSection from './components/MainSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from './components/About';

import Login from './components/Login';
import Signup from './components/Signup';
import { ToastContainer} from "react-toastify"
import Appointment from './components/Appointment';
import Features from './components/Features';
import Features1 from './components/Features1';
import News from './components/News';
import Service from './components/Service';
import Team from './components/Team';
import Testimonial from './components/Testimonial';

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);
  return (
   <>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<MainSection/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Appointment' element={<Appointment/>}></Route>
    <Route path='/Features' element={<Features/>}></Route>
    <Route path='/Features1' element={<Features1/>}></Route>
    <Route path='/News' element={<News/>}></Route>
    <Route path='/Service' element={<Service/>}></Route>
    <Route path='/Team' element={<Team/>}></Route>
    <Route path='/Testimonial' element={<Testimonial/>}></Route>

    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    </Route>
   </Routes>
   <ToastContainer/>
   </>
  );
}

export default App;
