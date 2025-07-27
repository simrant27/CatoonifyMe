import React from 'react'
import './css/contact.css'

export default function contact() {
  return (
     <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below to get in touch.</p>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Your Email" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="4" placeholder="Your Message"></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}
