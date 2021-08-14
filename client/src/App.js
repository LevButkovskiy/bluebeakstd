import React, { useState } from "react";
import './App.css';

import Menu from "./components/Menu";
import UserRoutes from "./components/routes/UserRoutes";
import MetricsRotes from "./components/routes/MetricsRoutes";
import AuthRoutes from "./components/routes/AuthRoutes";

function App(props) {
    const [currentView, setCurrentView] = useState('metrics');

    const renderView = () => {
        switch (currentView) {
            case 'user': return <UserRoutes />;
            case 'auth': return <AuthRoutes />;
            case 'metrics': return <MetricsRotes />;
            default: return '';
        }
    }

    const onMenuChange = (currentViewId) => {
        setCurrentView(currentViewId);
    }

    return (
      <div className='skeleton'>
          <Menu onChange={onMenuChange} value={currentView}/>
          <div className="content">
              <div className="header">
                  <span id='title'>{currentView}</span>
              </div>
              <hr className="line"/>
              <div className="data">
                  {renderView()}
              </div>
          </div>
      </div>
  );
}

export default App;
