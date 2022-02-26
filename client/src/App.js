import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import AllAds from './components/adBrowse/AllAds';
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
import NavButtonsContainer from './components/navigation/NavButtonsContainer';
import PostAd from './components/navigation/navigationButtons/PostAd';
import Back from './components/navigation/navigationButtons/Back';
import Browse from './components/navigation/navigationButtons/Browse';

function App() {

  const adList = [
    { image: "#", title: "Advertisement Title", price: 100.00 },
    { image: "#", title: "Advertisement Title2", price: 100.00 },
    { image: "#", title: "Advertisement Title3", price: 100.00 },
    { image: "#", title: "Advertisement Title4", price: 100.00 },
    { image: "#", title: "Advertisement Title5", price: 100.00 },
    { image: "#", title: "Advertisement Title6", price: 100.00 },
    { image: "#", title: "Advertisement Title7", price: 100.00 },
    { image: "#", title: "Advertisement Title8", price: 100.00 },
    { image: "#", title: "Advertisement Title9", price: 100.00 },
    { image: "#", title: "Advertisement Title10", price: 100.00 },
    { image: "#", title: "Advertisement Title11", price: 100.00 },
    { image: "#", title: "Advertisement Title12", price: 100.00 },
    { image: "#", title: "Advertisement Title13", price: 100.00 }
  ];

  return (
    <div className="App">
<<<<<<< HEAD
        <BrowserRouter>
          <Main>
            <Switch>
              <Route path='/'>
                <ComponentWithNavigation >
                  <TitleNote />
                  <FilterBar>
                    <FilterForm />
                    <SearchBar />
                    <NavButtonsContainer >
                      <PostAd />
                      <Back />
                    </NavButtonsContainer>
                  </FilterBar>
                  <AllAds adList={adList} />
                </ComponentWithNavigation>
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
=======

      <BrowserRouter>
        <Main>
          <Switch>
            <Route path='/'>
              <FilterBar>
                <FilterForm />
                <SearchBar />
                <NavButtonsContainer>
                  <PostAd />
                  <Back />
                </NavButtonsContainer>
              </FilterBar>
            </Route>
          </Switch>
        </Main>
      </BrowserRouter>
>>>>>>> 06f0b22158ea0c85daf5d0dac186f4c353005b7c
    </div>
  );
}

export default App;
