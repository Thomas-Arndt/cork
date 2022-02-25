import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/'>
                <p>Success</p>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
    </div>
  );
}

export default App;
