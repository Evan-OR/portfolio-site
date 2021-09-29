import Project from './Project';
import SectionTitle from './SectionTitle';
import wavesOpacitySvg from '../svg/wavesOpacity.svg';

function ProjectDisplay() {
  return (
    <div className="projects-display-wrapper">
      <div className="project-svg-divder">
        <img
          src={wavesOpacitySvg}
          draggable="false"
          alt="section-divider"
          className="project-divider"
        ></img>
      </div>

      <div className="project-section-title">
        <SectionTitle title="Projects" color="white" />
      </div>
      <Project />

      <div className="top-wrapper">
        <a href="#navbar">
          <i className="fas fa-chevron-circle-up"></i> Back to top
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
