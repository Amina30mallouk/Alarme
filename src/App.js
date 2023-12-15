

import AnalogClock from './components/AnalogClock';
import { useState } from 'react';
import Alarm from './context/Alarm';
import AlarmOption from './components/AlarmOption';
import DigitalClock from './components/DigitalClock';
import './App.css';
import ProximitySensor from './components/ProximitySensor';
import AnalogClockReverse from './components/AnalogClockReverse'; 

function App() {
  const [reverse, setReverse] = useState(false);

  const handleButtonClick = () => {
    setReverse(!reverse);
  };

  return (
    <section className={`clock container ${reverse ? 'reverse' : ''}`}>
      <ProximitySensor />

      <div className="clock-container grid">

          <Alarm>
            {reverse ? <AnalogClockReverse /> : <AnalogClock />}
            <DigitalClock />
            <AlarmOption />
            <button onClick={handleButtonClick} className="Btn">
              {reverse ? 'Normal ' : 'Reverse '}
            </button>
          </Alarm>
        </div>

    </section>
  );
}

export default App;

