import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Aboutus.css';
const AboutUs = () => {
  return (
    <>
     <Navbar />
      <div className="about-us-container">
        <h2>Our Team</h2>

        <div className="team-members">
          <div className="team-member">
            <img src="/assets/my-img.jpg" alt="Sanyam Jain" />
            <h3>Sanyam Jain</h3>
            <div className="social-links">
              {/* Add your social media links */}


              <a href="https://www.linkedin.com/in/sanyam-jain-874892201/" target='_blank'>
                <img
                  src="/assets/linkedin.svg"
                  alt="LinkedIn"
                  className='social-links-icon'
                />
              </a>
              <a href="https://github.com/Sanyam-2026" target='_blank'>
                <img
                  src="/assets/github.svg"
                  alt="GitHub"
                  className='social-links-icon'
                />
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src="/assets/ashish-img.jpg" alt="Ashish Rai" />
            <h3>Ashish Rai</h3>
            <div className="social-links">
              {/* Add your friend's social media links */}
              <a href="https://www.linkedin.com/in/ashish-rai-404-error/" target='_blank'>
                <img
                  src="/assets/linkedin.svg"
                  alt="LinkedIn"
                  className='social-links-icon'
                />
              </a>
              <a href="https://github.com/ashishrair500" target='_blank'>
                <img
                  src="/assets/github.svg"
                  alt="GitHub"
                  className='social-links-icon'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='want-to'>
          Want to Join us ! ok
          <div className='to'> <a className='btnNew' href="https://www.linkedin.com/in/sanyam-jain-874892201/" target='_blank'>Drop Dm Here</a>
                </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
