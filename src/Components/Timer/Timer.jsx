import React from "react";

export default function Timer(props) {
  let difference;
  if (props.time2 != null) {
    difference = Number(props.time) - Number(props.time2);

    // let a =
    //   Number("" + Math.floor((props.time / 6000000) % 60)) -
    //   Number("" + Math.floor((props.time2 / 6000000) % 60));
    // let b =
    //   Number("" + Math.floor((props.time / 60000) % 60).slice(-2)) -
    //   Number("" + Math.floor((props.time2 / 60000) % 60).slice(-2));

    // let c =
    //   Number("" + Math.floor((props.time / 1000) % 60).slice(-2)) -
    //   Number("" + Math.floor((props.time2 / 1000) % 60).slice(-2));

    // let difference = "" + a + " " + b + " " + c;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      {props.time2 != null && (
        <div
          style={{
            marginRight: "40px",
            backgroundColor: "greenyellow"
          }}
        >
          <span>
            {("0" + Math.floor((difference / 60000000) % 60)).slice(-2)}:
          </span>
          <span>
            {("0" + Math.floor((difference / 60000) % 60)).slice(-2)}:
          </span>
          <span>{("0" + Math.floor((difference / 1000) % 60)).slice(-2)}.</span>
          <span>{("0" + ((difference / 10) % 100)).slice(-2)}</span>
        </div>
      )}

      <div>
        <span>
          {("0" + Math.floor((props.time / 60000000) % 60)).slice(-2)}:
        </span>
        <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>
        <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
}
