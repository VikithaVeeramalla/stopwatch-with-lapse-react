import React, { useState } from "react";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [lapse, setLapse] = useState([]);
  const [elapsedTime, setElapsedTime] = useState([]);

  React.useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setLapse([]);
  };
  const handleLapse = () => {
    setLapse([...lapse, time]);
    setElapsedTime([...elapsedTime, time]);
  };

  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleLapse={handleLapse}
      />
      {/* {lapse.length > 0 &&
        lapse.map((lap, key) => {
          return <Timer time={lap} />;
        })} */}
      <div>
        {lapse.length > 0 &&
          lapse.map((lap, index) => {
            return (
              <Timer time2={index > 0 ? lapse[index - 1] : null} time={lap} />
            );
          })}
      </div>
    </div>
  );
}

export default StopWatch;
