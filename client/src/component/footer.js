import React from 'react';
import './css/footer.css';

export default function Footer() {
  return (
    <div className='container'>
         
            <h3>Cartoonify<span className="logo-text">Me</span></h3>
            <p>Transform your photos into fun cartoons!</p>
        
          <div className="footer-links">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="/about">About Project</a></li>
            <li><a href="/tech">How It Works</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for project updates, new features, and open source contributions.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" aria-label="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
   </div>

  );
}
