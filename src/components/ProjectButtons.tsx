import React from 'react';

function ProjectButtons() {
  const weatherAppRequest = () => {
    console.log('REQUESTING');
  };

  return (
    <div className="buttons-wrapper">
      <div className="button">
        <div className="button-text live" onClick={() => weatherAppRequest()}>
          VIEW PROJECT
        </div>
      </div>

      <div className="button">
        <div className="button-text code">VIEW CODE &lt;/&gt;</div>
      </div>
    </div>
  );
}

export default ProjectButtons;
