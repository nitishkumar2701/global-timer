import { useState } from 'react';
import './App.css';

function App() {
  const [currentTimes, setCurrentTimes] = useState({});

  const timeZones = {
    "London (UK)": "Europe/London",
    "Dublin (Ireland)": "Europe/Dublin",
    "Delhi (India)": "Asia/Kolkata",
    "New York (USA)": "America/New_York",
    "Los Angeles (USA)": "America/Los_Angeles",
    "Auckland (New Zealand)": "Pacific/Auckland",
    "Tokyo (Japan)": "Asia/Tokyo",
    "Sydney (Australia)": "Australia/Sydney",
    "Berlin (Germany)": "Europe/Berlin",
    "Dubai (UAE)": "Asia/Dubai",
    "Sao Paulo (Brazil)": "America/Sao_Paulo",
    "Singapore": "Asia/Singapore",
    "Paris (France)": "Europe/Paris",
    "Cairo (Egypt)": "Africa/Cairo",
    "Moscow (Russia)": "Europe/Moscow",
    "Shanghai (China)": "Asia/Shanghai",
    "Hong Kong": "Asia/Hong_Kong",
    "Mexico City (Mexico)": "America/Mexico_City",
    "Johannesburg (South Africa)": "Africa/Johannesburg",
    "Bangkok (Thailand)": "Asia/Bangkok",
  };

  function getTimeForZone(zone) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).format(new Date());
  }

  function updateAllTimes() {
    const times = {};
    Object.entries(timeZones).forEach(([city, zone]) => {
      times[city] = getTimeForZone(zone);
    });
    setCurrentTimes(times);
  }

  setInterval(updateAllTimes, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Global Timer</h1>
        <div className="time-grid">
          {Object.entries(currentTimes).map(([city, time]) => (
            <div key={city} className="time-card">
              <h2>{city}</h2>
              <p className="time">{time}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
