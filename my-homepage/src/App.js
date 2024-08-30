import React from 'react';
import './App.css';

const Portfolio = () => {
  return (
    <>
      <header>
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>

      <div className="container">
        {/* About Section */}
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I am a passionate web developer with experience in creating
            dynamic and responsive websites using HTML, CSS, JavaScript, and
            various frameworks.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>My Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            {/* Add more skills as needed */}
          </ul>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="project">
            <img src="project1.jpg" alt="Project 1" />
            <h3>Project Title</h3>
            <p>A brief description of the project goes here.</p>
          </div>
          {/* Add more projects as needed */}
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact Me</h2>
          <p>
            Email:{' '}
            <a href="mailto:yourname@example.com">yourname@example.com</a>
          </p>
          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Your Profile
            </a>
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Portfolio;
