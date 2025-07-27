import React from 'react';
import './css/about.css'; 

export default function AboutUs() {
  return (
    <div className="about-container">
      <h1>About CartoonifyMe</h1>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          CartoonifyMe is an AI-powered app designed to transform your photos into fun, vibrant cartoons instantly.
          Our mission is to make AI art accessible and enjoyable for everyone.
        </p>
      </section>

      <section className="about-section">
        <h2>How It Works</h2>
        <p>
          Using advanced machine learning models, CartoonifyMe processes your images and applies artistic cartoon
          styles while preserving your photo's unique features.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <p>
          We are a group of passionate developers and artists dedicated to combining technology and creativity.
          This project is continuously improved with love and contributions from the community.
        </p>
      </section>

      <section className="about-section">
        <h2>Get Involved</h2>
        <p>
          CartoonifyMe is open source! Feel free to check out our GitHub repository, contribute, or suggest new features.
        </p>
      </section>
    </div>
  );
}
