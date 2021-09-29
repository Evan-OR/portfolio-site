import React from "react";

type ButtonProps = {
  githubLink?: string;
  projectLink?: string;
  onlyDisplayCode?: boolean;
};

function ProjectButtons(props: ButtonProps) {
  const { githubLink, projectLink, onlyDisplayCode } = props;
  // const weatherAppRequest = () => {
  //   console.log("REQUESTING");
  // };

  return (
    <div className="buttons-wrapper">
      {onlyDisplayCode ? (
        <></>
      ) : (
        <div className="button">
          <a href={projectLink} target="_blank" rel="noreferrer">
            <div className="button-text live">LIVE PROJECT</div>
          </a>
        </div>
      )}

      <div className="button">
        <a href={githubLink} target="_blank" rel="noreferrer">
          <div className="button-text code">VIEW CODE &lt;/&gt;</div>
        </a>
      </div>
    </div>
  );
}

export default ProjectButtons;
