// import React from 'react';
import RickyMonty from '../assets/rickymonty.png';
import Eye from '../assets/eye.png';
import './proximitySensor.css';

// ....... import jdida
import React, { useState, useContext } from 'react';
import { AlarmContext } from '../context/Alarm';





const ProximitySensor = () => {

  const [seconds, setSeconds] = useState('');
  const clock = () => {
    let date = new Date();
    let ss = date.getSeconds() * 6;
    setSeconds(`rotateZ(${ss}deg)`);
  };

  setInterval(clock, 1000);

  return (
    <aside className="main">
      <img src={RickyMonty} alt="Ricky and Monty" id="anchor" />
      <div id="eyes">
        <img
          src={Eye}
          alt="Eye"
          className="eye"
          style={{ top: '57px', right: '20px',transform: seconds }}
          
        />
        <img
          src={Eye}
          alt="Eye"
          className="eye"
          style={{ top: '66px', right: '78px',transform: seconds }}
        />
        <img
          src={Eye}
          alt="Eye"
          className="eye"
          style={{ bottom: '54px', left: '104px',transform: seconds }}
        />
        <img
          src={Eye}
          alt="Eye"
          className="eye"
          style={{ bottom: '52px', left: '48px' ,transform: seconds}}
        />
      </div>
    </aside>
  );
};

export default ProximitySensor;
