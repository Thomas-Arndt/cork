import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import AdDetails from './components/AdDetails';
import FilterBar from './components/FilterBar'
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Switch>
            <Route path='/addetails'>
              <FilterBar />
            </Route>
          </Switch>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
