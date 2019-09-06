import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import ProjectContainer from './components/projects/ProjectContainer';
import ActionContainer from './components/actions/ActionContainer';

function App() {
  return (
    <div className="App">
      <Route exact path='/projects' render={props => <ProjectContainer {...props} />} />
      <Route exact path='/actions' render={props => <ActionContainer {...props} />} />
    </div>
  );
}

export default App;
