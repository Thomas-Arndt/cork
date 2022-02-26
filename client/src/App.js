import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import EditAdForm from './components/editCreateAdForms/EditAdForm';
import NewAdForm from './components/editCreateAdForms/NewAdForm';
import TitleNote from './components/navigation/TitleNote';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/'>
                <TitleNote />
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
    </div>
  );
}

export default App;
