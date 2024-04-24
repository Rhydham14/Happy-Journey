import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/jsx/Login.js';
import Signup from '../src/jsx/Signup.js';
import Dashboard from '../src/jsx/Dashboard.js';
import Blog from '../src/jsx/Blog.js';
import ReadBlog from '../src/jsx/ReadBlog.js';
import NewBlog from '../src/jsx/NewBlog.js';
import Flight from '../src/jsx/Flight.js';
import Contact from './jsx/Contact.js';
import Hotel from './jsx/Hotel.js';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} /> 
       <Route path="/dashboard" element={<Dashboard />} /> 
       <Route path="/blog" element={<Blog />} /> 
       <Route path="/readblog" element={<ReadBlog/>}/>
       <Route path="/createblog" element={<NewBlog/>}/>
       <Route path="/flight" element={<Flight/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/hotel" element={<Hotel/>}/>



    </Routes>
  </Router> 
  );
}

export default App;
