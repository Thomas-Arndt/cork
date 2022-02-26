import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import StickyNote from './components/adBrowse/StickyNote';

import AdDetails from './components/adDetails/AdDetails';
import FilterBar from './components/navigation/FilterBar'
import EditAdForm from './components/editCreateAdForms/EditAdForm';
import NewAdForm from './components/editCreateAdForms/NewAdForm';
import TitleNote from './components/navigation/TitleNote';
import ComponentWithNavigation from './views/ComponentWithNavigation';

import Main from './views/Main';
import FilterForm from './components/navigation/FilterForm';
import SearchBar from './components/navigation/SearchBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Switch>
            <Route path='/'>
              <AdDetails />
            </Route>
          </Switch>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
