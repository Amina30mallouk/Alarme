import React, { useContext, useEffect, useState } from 'react';
import { AlarmContext } from '../context/Alarm';
import './digitalClock.css';
import SandClockSpinner from '../Loader/SandClock';

const DigitalClock = () => {
  const {
    hourDigital,
    minutesDigital,
    amPm,
    dayNow,
    monthNow,
    yearNow,
    showSpinner,
  } = useContext(AlarmContext);

  console.log(showSpinner);

  return (
    <div>
      <div className="clock-text">
        {showSpinner && <SandClockSpinner />}
        <div className="clock-text-hour">{`${hourDigital}:`}</div>
        <div className="clock-text-minutes">{minutesDigital}</div>
        <div className="clock-text-ampm">{amPm}</div>
      </div>
      <div className="clock-date">
        <span>{`${dayNow} `}</span>
        <span>{`${monthNow} , `}</span>
        <span>{yearNow}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
