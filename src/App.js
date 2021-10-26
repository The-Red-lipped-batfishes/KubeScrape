
/**
 * ************************************
 *
 * @module App.js
 * @author team KuberG8
 * @date
 * @description Main component for the React app
 * 
 * ************************************
 */

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { Switch, Route } from 'react-router-dom';
import NodeOverview from './components/NodeOverview/NodeOverview';
import regeneratorRuntime from "regenerator-runtime";

const App = () => {

  return(
    <div className='main'>

      <Sidebar/ >
      <NodeOverview />
      
      <Switch>
        <Route path='/' exact>
          home
        </Route>
        <Route path='/node' exact>
          node
        </Route>
      </Switch>
      

    </div>
  );
}

export default App;
