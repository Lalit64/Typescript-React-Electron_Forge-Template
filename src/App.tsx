import React, { useState } from "react";
import logo from "./logo.svg";
import lightMode from "./light_mode_black_24dp.svg";
import darkMode from "./dark_mode_black_24dp.svg";
import AppStyle from "./App-style";
import AppStyleDark from "./App-style-dark";
// @ts-ignore
import { TitleBar } from "react-desktop/windows";

const electron = window.require("electron");
const remote = electron.remote;
const mainWindow = remote.getCurrentWindow();

const App = () => {
  const [isMax, setIsMax] = useState(true);

  const handleMaxChange = () => {
    setIsMax(!isMax);
  };

  const [theme, setTheme] = useState(false);

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  return (
    <div className="App">
      {theme === false ? <AppStyle /> : <AppStyleDark />}

      <header
        id="titlebar"
        onDoubleClick={() => {
          handleMaxChange();
          {
            isMax === false ? mainWindow.maximize() : mainWindow.unmaximize();
          }
        }}
      >
        {process.platform === "win32" && (
          <TitleBar
            title="Electron TypeScript React"
            controls
            isMaximized={isMax}
            background={theme === true ? "#282c34" : "white"}
            theme={theme === false ? "light" : "dark"}
            style={{ height: 37 }}
            onCloseClick={() => mainWindow.close()}
            onMinimizeClick={() => mainWindow.minimize()}
            onMaximizeClick={() => {
              handleMaxChange();
              mainWindow.maximize();
            }}
            onRestoreDownClick={() => {
              handleMaxChange();
              mainWindow.unmaximize();
            }}
          />
        )}
      </header>
      <div className="App-header" id="App-header">
        <button className="Theme-Toggler" onClick={handleThemeChange}>
          <img src={theme === true ? lightMode : darkMode} />
        </button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};

export default App;
