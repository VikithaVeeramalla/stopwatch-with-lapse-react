import React from "react";

export default function ControlButtons(props) {
  const StartButton = <button onClick={props.handleStart}>Start</button>;
  const ActiveButtons = (
    <div>
      <button onClick={props.handleReset}>Reset</button>
      <button onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
      <button onClick={props.handleLapse}>Lapse</button>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
