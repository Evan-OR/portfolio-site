import React, { useEffect } from 'react';
import chartjs_Svg from '../svg/chartjs-icon.svg';
import mysql_svg from '../svg/mysql.svg';
import node_svg from '../svg/nodejs-icon.svg';
import express_svg from '../svg/express-icon.svg';
import azure_svg from '../svg/azure.svg';

import typescript_svg from '../svg/typescript-icon.svg';
import weatherImg from '../img/Responsive_Weather.png';
import drinksApp from '../img/teamProject.png';
import todoImg from '../img/Responsive_taskmanager.png';
import portfolioImg from '../img/Responsive_portfolio.png';
import sortingImg from '../img/sortingImg.png';
import ProjectButtons from './ProjectButtons';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Project() {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, easing: 'ease-out' });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="project-wrapper">
        <div className="project-text">
          <div className="project-title">Food and Drink Recommendation App</div>

          <div className="project-desc">
            <div className="project-paragraph">
              This is a team project I am currently working on in college. It recommends new foods and drinks fore users
              to try out based on their likes.
            </div>

            <div className="project-paragraph">
              The frontend was made with <span className="highlight-text">React.js</span> and
              <span className="highlight-text"> TypeScript</span>, styled with{' '}
              <span className="highlight-text"> SASS </span>.
            </div>
          </div>

          {/* ICONS */}
          <div className="project-tech-icons">
            <div title="React.js" className="react-color">
              <i className="fab fa-react"></i>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '8px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
              title="TypeScript"
            >
              <img alt="TypeScript Icon" draggable="false" width="38px" src={typescript_svg}></img>
            </div>
            <div title="HTML" className="html-color">
              <i className="fab fa-html5"></i>
            </div>
            <div title="CSS" className="css-color">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div title="SASS" className="sass-color">
              <i className="fab fa-sass"></i>
            </div>
          </div>
          <div className="project-desc">
            <div className="project-paragraph">
              We used <span className="highlight-text">Node.js</span> and
              <span className="highlight-text"> express.js</span> to create out own{' '}
              <span className="highlight-text"> REST API</span> and we hosted a{' '}
              <span className="highlight-text">MySQL</span> database using{' '}
              <span className="highlight-text">Microsoft Azure</span>.
            </div>
          </div>

          {/* ICONS */}
          <div className="project-tech-icons">
            <div title="MySQL">
              <img alt="My SQL" draggable="false" width="110px" src={mysql_svg}></img>
            </div>
            <div title="Node.js">
              <img style={{ marginTop: '10px' }} alt="express.js" draggable="false" width="70px" src={node_svg}></img>
            </div>
            <div title="Express.js">
              <img
                style={{ marginTop: '10px' }}
                alt="express.js"
                draggable="false"
                width="80px"
                src={express_svg}
              ></img>
            </div>
            <div title="Azure">
              <img style={{ marginTop: '5px' }} alt="express.js" draggable="false" width="40px" src={azure_svg}></img>
            </div>
          </div>

          <ProjectButtons githubLink="https://github.com/Evan-OR/weather-app" onlyDisplayCode={true} />
        </div>

        <div className="project-image">
          <img style={{ width: '100%' }} alt="weather" draggable="false" src={drinksApp}></img>
        </div>
      </div>
      <div data-aos="fade-up" className="project-wrapper">
        <div className="project-text">
          <div className="project-title">Weather App</div>
          <div className="project-desc">
            <div className="project-paragraph">
              Global weather application that allows the user to search for a specific city, country, etc and see the
              current weather information.
            </div>

            <div className="project-paragraph">
              Front end was made with <span className="highlight-text">React.js</span>, styled with{' '}
              <span className="highlight-text"> SASS </span> and the graphing data was displayed using{' '}
              <span className="highlight-text">Chart.js</span> and the public{' '}
              <span className="highlight-text"> REST API</span> OpenWeatherMap.
            </div>
          </div>

          {/* ICONS */}
          <div className="project-tech-icons">
            <div title="React.js" className="react-color">
              <i className="fab fa-react"></i>
            </div>
            <div title="HTML" className="html-color">
              <i className="fab fa-html5"></i>
            </div>
            <div title="CSS" className="css-color">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div title="Javascript" className="javscript-color">
              <i className="fab fa-js-square"></i>
            </div>
            <div title="SASS" className="sass-color">
              <i className="fab fa-sass"></i>
            </div>
            <div title="Chart.js">
              <img alt="chart.js" draggable="false" width="50px" src={chartjs_Svg}></img>
            </div>
          </div>

          <ProjectButtons
            githubLink="https://github.com/Evan-OR/weather-app"
            projectLink="https://evan-or.github.io/weather-app/"
          />
        </div>

        <div className="project-image">
          <img alt="weather" draggable="false" src={weatherImg}></img>
        </div>
      </div>

      <div data-aos="fade-up" className="project-wrapper">
        <div className="project-text">
          <div className="project-title">Task Management App</div>
          <div className="project-desc">
            <div className="project-paragraph">
              Task Management application that allows the user to create a list of tasks they need to complete. Each
              task can be customised to have an icon, colour and priority. The task list can also be sorted based on the
              icon, colour and priority.
            </div>

            <div className="project-paragraph">
              <div className="project-paragraph">
                Front end was made with <span className="highlight-text">React.js</span> and{' '}
                <span className="highlight-text">TypeScript</span>, styled with{' '}
                <span className="highlight-text"> SASS </span>. Browers{' '}
                <span className="highlight-text">Local Storage</span> used to store users list of tasks.
              </div>
            </div>
          </div>

          {/* ICONS */}
          <div className="project-tech-icons">
            <div title="React.js" className="react-color">
              <i className="fab fa-react"></i>
            </div>
            <div title="HTML" className="html-color">
              <i className="fab fa-html5"></i>
            </div>
            <div title="CSS" className="css-color">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div title="Javascript" className="javscript-color">
              <i className="fab fa-js-square"></i>
            </div>
            <div title="SASS" className="sass-color">
              <i className="fab fa-sass"></i>
            </div>
          </div>
          <ProjectButtons
            githubLink="https://github.com/Evan-OR/todo-v2"
            projectLink="https://evan-or.github.io/todo-v2/"
          />
        </div>

        <div className="project-image">
          <img alt="weather" draggable="false" src={todoImg}></img>
        </div>
      </div>

      <div data-aos="fade-up" className="project-wrapper">
        <div className="project-text">
          <div className="project-title">Sorting Algorithms Visualization</div>
          <div className="project-desc">
            <div className="project-paragraph">
              Sorting Algorithms Visualization Website created with{' '}
              <span className="highlight-text">Vanilla Javascript</span>. User can pick between different sorting
              algorithms along with sort speed and array size.
            </div>
            <div className="project-paragraph">
              Sorting Algorithms: <span className="highlight-text">Bubble Sort</span>,{' '}
              <span className="highlight-text">Insertion Sort</span>,{' '}
              <span className="highlight-text">Selection Sort</span>.
            </div>
          </div>

          {/* ICONS */}
          <div className="project-tech-icons">
            <div title="HTML" className="html-color">
              <i className="fab fa-html5"></i>
            </div>
            <div title="CSS" className="css-color">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div title="Javascript" className="javscript-color">
              <i className="fab fa-js-square"></i>
            </div>
          </div>
          <ProjectButtons
            githubLink="https://github.com/Evan-OR/sortingAlgorithms"
            projectLink="https://evan-or.github.io/sortingAlgorithms/"
          />
        </div>

        <div className="project-image">
          <img alt="weather" draggable="false" src={sortingImg}></img>
        </div>
      </div>

      <div data-aos="fade-up" className="project-wrapper">
        <div className="project-text">
          <div className="project-title">My Portfolio Site</div>
          <div className="project-desc">
            <div className="project-paragraph">
              The current site you're scrolling though is a project of mine in itself. It's a mobile responive website
              to show off my web development projects.
            </div>

            <div className="project-paragraph">
              I created this site using <span className="highlight-text">React.js</span>,{' '}
              <span className="highlight-text">Typescript</span> and <span className="highlight-text">Sass</span>.
            </div>
          </div>

          {/* ICONS */}
          <div className="project-tech-icons">
            <div title="React.js" className="react-color">
              <i className="fab fa-react"></i>
            </div>
            <div title="HTML" className="html-color">
              <i className="fab fa-html5"></i>
            </div>
            <div title="CSS" className="css-color">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div title="Typescript">
              <img className="typescript" alt="typescript" draggable="false" width="30px" src={typescript_svg}></img>
            </div>
            <div title="SASS" className="sass-color">
              <i className="fab fa-sass"></i>
            </div>
          </div>

          <ProjectButtons githubLink="https://github.com/Evan-OR/portfolio-site" onlyDisplayCode={true} />
        </div>

        <div className="project-image">
          <img alt="weather" draggable="false" src={portfolioImg}></img>
        </div>
      </div>
    </>
  );
}

export default Project;
