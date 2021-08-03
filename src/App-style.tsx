import React from "react";

const AppStyle = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
                  .App {
                      text-align: center;
                  }

                    .App-logo {
                      height: 40vmin;
                      pointer-events: none;
                    }
                    
                    @media (prefers-reduced-motion: no-preference) {
                      .App-logo {
                        animation: App-logo-spin infinite 20s linear;
                      }
                    }
                    
                    .App-header {
                      background-color: white;
                      min-height: calc(100vh - 38px);
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      font-size: calc(10px + 2vmin);
                      color: #282c34;
                    }
                    
                    #titlebar{
                      width: 100%;
                      height: 38px;
                      background-color: white;
                      border-bottom: 1px solid whitesmoke;
                      -webkit-app-region:drag ;
                    }
                    
                    .App-link {
                      color: #61dafb;
                    }
                    
                    @keyframes App-logo-spin {
                      from {
                        transform: rotate(0deg);
                      }
                      to {
                        transform: rotate(360deg);
                      }
                    }
                    
                    html {
                      overflow: scroll;
                      overflow-x: hidden;
                    }
                    ::-webkit-scrollbar {
                      width: 0;  /* Remove scrollbar space */
                      background: transparent;  /* Optional: just make scrollbar invisible */
                    }
                    /* Optional: show position indicator in red */
                    ::-webkit-scrollbar-thumb {
                      background: transparent;
                    }
                    
                    [title="Minimize"] {
                      padding: 3px;
                      margin-top: -3px;
                    }
                    
                    [title="Maximize"] {
                      padding: 3px;
                      margin-top: -3px;
                    }
                    
                    [title="Close"] {
                      padding: 3px;
                      margin-top: -3px;
                    }
                    
                    [title="Restore Down"] {
                      padding: 3px;
                      margin-top: -3px;
                    }
                    
                    .Theme-Toggler {
                      border-radius: 100px;
                      border: none;
                      background: none;
                      padding: 5px;
                      width: 50px;
                      height: 50px;
                      position: absolute;
                      top: 50px;
                      left: 10px;
                    }
                    
                    .Theme-Toggler:hover {
                      background: rgba(0, 0, 0, 0.3);
                    }
            `,
      }}
    />
  );
};

export default AppStyle;
