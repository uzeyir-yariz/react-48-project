import React, { useState } from "react"

const Prefer: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(prev => !prev);
      console.log(isDarkMode);
    };
  
    return (
      <div>
        <button id="btnSwitch" className="btn btn-primary d-flex m-auto" onClick={toggleTheme}>Switch Theme</button>

        <div className={isDarkMode ? 'bg-dark' : ''}>
            <button className="btn">test</button>
        </div>
      </div>
    );
}

export default Prefer
