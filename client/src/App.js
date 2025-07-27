import React from 'react';
import './App.css';
import Nav from './component/nav'; 
import Footer from './component/footer'; 
import MainBody from './component/body';
import AboutUs from './component/about';
import Contact from './component/contact';
function App() {
  return (
    <>
      <Nav />
      <MainBody/>
      <div style={{ marginTop: '10px' }}></div>
      <AboutUs/>
      <Contact/>
      {/* <div style={{ marginTop: '10px' }}></div> */}
      <Footer/>
    </>
  );
}

export default App;
