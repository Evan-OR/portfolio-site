import React, { useEffect } from 'react';
import express_svg from '../svg/express-icon.svg';
import typescript_svg from '../svg/typescript-icon.svg';
import node_svg from '../svg/nodejs-icon.svg';
import java_svg from '../svg/java-icon.svg';
import git_svg from '../svg/git-icon.svg';
import gitHub_svg from '../svg/github-icon.svg';
import photoshop_svg from '../svg/photoshop-icon.svg';
import figma_svg from '../svg/figma-icon.svg';
import cSharp_svg from '../svg/cSharp-icon.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, easing: 'ease-out' });
  }, []);

  return (
    <div id="About" className="about-wrapper">
      <div data-aos="fade-up" className="about-section">
        <div className="about-section-title">
          <span className="about-highlight">About</span> Me
        </div>

        <div className="about-section-content">
          <p>
            I am a self-taught web developer that is looking for opportunities
            to grow my skill-set in a professional environment.
          </p>
          <p>
            I am currently studying Computing at National College of Ireland.
          </p>
          <p>
            I have a passion for for creating clean and user-friendly
            experiences.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="about-section">
        <div className="about-section-title">
          My <span className="about-highlight">Skillset</span>
        </div>

        <div className="about-section-content">
          <div className="content-title">Front-end</div>
          <div className="skills-wrapper">
            <div className="skills-text">
              HTML, CSS, SASS, Javascript, Typescript, React.js.
            </div>
            <div className="skills-icons">
              <div title="HTML" className="html-color">
                <i className="fab fa-html5"></i>
              </div>
              <div title="CSS" className="css-color">
                <i className="fab fa-css3-alt"></i>
              </div>
              <div title="SASS" className="sass-color">
                <i className="fab fa-sass"></i>
              </div>
              <div title="Javascript" className="javscript-color">
                <i className="fab fa-js-square"></i>
              </div>
              <div title="Typescript">
                <img
                  className="typescript"
                  alt="typescript"
                  draggable="false"
                  width="30px"
                  src={typescript_svg}
                ></img>
              </div>
              <div title="React.js" className="react-color">
                <i className="fab fa-react"></i>
              </div>
            </div>
          </div>

          <div className="content-title">Back-end</div>
          <div className="skills-wrapper">
            <div className="skills-text">Node.js, Express.js</div>

            <div className="skills-icons">
              <div title="Node.js">
                <img
                  alt="express.js"
                  draggable="false"
                  width="50px"
                  src={node_svg}
                ></img>
              </div>
              <div title="Express.js">
                <img
                  alt="express.js"
                  draggable="false"
                  width="60px"
                  src={express_svg}
                ></img>
              </div>
            </div>
          </div>

          <div className="content-title">Other</div>
          <div className="skills-wrapper">
            <div className="skills-text">
              C#, Java, git, Github, Photoshop, Figma
            </div>
            <div className="skills-icons">
              <div title="C#">
                <img
                  alt="Java"
                  draggable="false"
                  width="40px"
                  src={cSharp_svg}
                ></img>
              </div>
              <div title="Java">
                <img
                  alt="Java"
                  draggable="false"
                  width="26px"
                  src={java_svg}
                ></img>
              </div>
              <div title="git">
                <img
                  alt="git"
                  draggable="false"
                  width="50px"
                  src={git_svg}
                ></img>
              </div>
              <div title="GitHub">
                <img
                  alt="github"
                  draggable="false"
                  width="40px"
                  src={gitHub_svg}
                ></img>
              </div>
              <div title="Photoshop">
                <img
                  alt="photoshop"
                  draggable="false"
                  width="38px"
                  src={photoshop_svg}
                ></img>
              </div>
              <div title="Figma">
                <img
                  alt="Figma"
                  draggable="false"
                  width="26px"
                  src={figma_svg}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="about-section">
        <div className="about-section-title">
          <span className="about-highlight">Contact</span> Me
        </div>

        <div className="about-section-content">
          <div className="content-title">E-mail</div>
          <div className="contact-text">theevanorourke@gmail.com</div>

          <div className="content-title">Phone Number</div>
          <div className="contact-text">087 361 9630</div>
        </div>
      </div>
    </div>
  );
}

export default About;
