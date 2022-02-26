import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import StickyNote from './components/adBrowse/StickyNote';

import AdDetails from './components/AdDetails';
import EditAdForm from './components/editCreateAdForms/EditAdForm';
import NewAdForm from './components/editCreateAdForms/NewAdForm';
import TitleNote from './components/navigation/TitleNote';
import ComponentWithNavigation from './views/ComponentWithNavigation';

import Main from './views/Main';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/'>
                <ComponentWithNavigation >
                  <TitleNote />
                  <StickyNote />
                  <AdDetails />
                </ComponentWithNavigation>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
    </div>
  );
}

export default App;
