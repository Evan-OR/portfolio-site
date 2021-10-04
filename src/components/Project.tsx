import chartjs_Svg from '../svg/chartjs-icon.svg';
import azure_svg from '../svg/azure.svg';
import typescript_svg from '../svg/typescript-icon.svg';
import weatherImg from '../img/Responsive_Weather.png';
import todoImg from '../img/Responsive_todo.png';
import portfolioImg from '../img/Responsive_portfolio.png';
import sortingImg from '../img/sortingImg.png';
import ProjectButtons from './ProjectButtons';

function Project() {
  return (
    <>
      <div className="project-wrapper">
        <div className="project-text">
          <div className="project-title">My Portfolio Site</div>
          <div className="project-desc">
            <div className="project-paragraph">
              The current site you're scrolling though is a project of mine in
              itself. It's a mobile responive website to show off my web
              development projects.
            </div>

            <div className="project-paragraph">
              I created this site using{' '}
              <span className="highlight-text">React.js</span>,{' '}
              <span className="highlight-text">Typescript</span> and{' '}
              <span className="highlight-text">Sass</span>.
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
              <img
                className="typescript"
                alt="typescript"
                draggable="false"
                width="30px"
                src={typescript_svg}
              ></img>
            </div>
            <div title="SASS" className="sass-color">
              <i className="fab fa-sass"></i>
            </div>
          </div>

          <ProjectButtons
            githubLink="https://github.com/Evan-OR/portfolio-site"
            onlyDisplayCode={true}
          />
        </div>

        <div className="project-image">
          <img alt="weather" draggable="false" src={portfolioImg}></img>
        </div>
      </div>

      <div className="project-wrapper">
        <div className="project-text">
          <div className="project-title">Weather App</div>
          <div className="project-desc">
            <div className="project-paragraph">
              Global weather application that allows the user to search for a
              specific city, country, etc and see the current weather
              information.
            </div>

            <div className="project-paragraph">
              Front end was made with{' '}
              <span className="highlight-text">React.js</span>, styled with{' '}
              <span className="highlight-text"> SASS </span> and the graphing
              data was displayed using{' '}
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
              <img
                alt="chart.js"
                draggable="false"
                width="50px"
                src={chartjs_Svg}
              ></img>
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

      <div className="project-wrapper">
        <div className="project-text">
          <div className="project-title">To-do App</div>
          <div className="project-desc">
            <div className="project-paragraph">
              Todo application that allows the user to create a list of tasks
              they need to complete along with being able to view tasks that
              they have already completed.
            </div>

            <div className="project-paragraph">
              <div className="project-paragraph">
                Front end was made with{' '}
                <span className="highlight-text">React.js</span>, styled with{' '}
                <span className="highlight-text"> SASS </span>. Browers{' '}
                <span className="highlight-text">Local Storage</span> used to
                store users list of tasks.
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
            githubLink="https://github.com/Evan-OR/todo-react"
            projectLink="https://evan-or.github.io/todo-react/"
          />
        </div>

        <div className="project-image">
          <img alt="weather" draggable="false" src={todoImg}></img>
        </div>
      </div>

      <div className="project-wrapper">
        <div className="project-text">
          <div className="project-title">Sorting Algorithms Visualization</div>
          <div className="project-desc">
            <div className="project-paragraph">
              Sorting Algorithms Visualization Website created with{' '}
              <span className="highlight-text">Vanilla Javascript</span>. User
              can pick between different sorting algorithms along with sort
              speed and array size.
            </div>
            <div className="project-paragraph">
              Sorting Algorithms:{' '}
              <span className="highlight-text">Bubble Sort</span>,{' '}
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
    </>
  );
}

export default Project;
