import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/place/CPEC+Christ+Pentecostal+Evangelical+Church/@31.4099216,74.3697379,17z/data=!3m1!4b1!4m6!3m5!1s0x39190752031bba93:0x6c256278e6ddcee3!8m2!3d31.4099216!4d74.3723128!16s%2Fg%2F11rwphhrqf?entry=ttu"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
