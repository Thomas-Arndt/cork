import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import AllAds from './components/adBrowse/AllAds';

import FilterBar from './components/navigation/FilterBar'
import TitleNote from './components/navigation/TitleNote';
import ComponentWithNavigation from './views/ComponentWithNavigation';

import Main from './views/Main';
import FilterForm from './components/navigation/FilterForm';
import EditAdForm from './components/editCreateAdForms/EditAdForm';
import NewAdForm from './components/editCreateAdForms/NewAdForm';
import SearchBar from './components/navigation/SearchBar';
import NavButtonsContainer from './components/navigation/NavButtonsContainer';
import PostAd from './components/navigation/navigationButtons/PostAd';
import Back from './components/navigation/navigationButtons/Back';
import Browse from './components/navigation/navigationButtons/Browse';
import ContactForm from './components/contactForm/ContactForm';
import DeleteForm from './components/deleteForm/DeleteForm';
import Landing from './views/Landing';
import AdPosted from './components/adPosted/AdPosted';
import AdDetails from './components/adDetails/AdDetails';



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

      <BrowserRouter>
        <Main>
          <Switch>
            <Route path='/browse'>
              <ComponentWithNavigation >
                <TitleNote />
                <FilterBar >
                  <FilterForm />
                  <SearchBar />
                  <NavButtonsContainer >
                    <PostAd />
                  </NavButtonsContainer>
                </FilterBar>
                <AllAds adList={adList} />
              </ComponentWithNavigation>
            </Route>
            <Route path='/post_ad'>
              <ComponentWithNavigation >
                <TitleNote />
                <FilterBar >
                  <NavButtonsContainer >
                    <Back />
                    <Browse />
                  </NavButtonsContainer>
                </FilterBar>
                <NewAdForm />
              </ComponentWithNavigation>
            </Route>
            <Route path='/details/:adId'>
              <ComponentWithNavigation >
                <TitleNote />
                <FilterBar >
                  <FilterForm />
                  <SearchBar />
                  <NavButtonsContainer >
                    <Back />
                    <PostAd />
                  </NavButtonsContainer>
                </FilterBar>
                <AdDetails />
              </ComponentWithNavigation>
            </Route>
            <Route path='/edit_ad/:adId'>
              <ComponentWithNavigation >
                <TitleNote />
                <FilterBar >
                  <NavButtonsContainer >
                    <Browse />
                    <PostAd />
                  </NavButtonsContainer>
                </FilterBar>
                <EditAdForm />
              </ComponentWithNavigation>
            </Route>
            <Route path='/contact/:adId'>
              <ComponentWithNavigation >
                <TitleNote />
                <FilterBar >
                  <NavButtonsContainer >
                    <Back />
                    <Browse />
                  </NavButtonsContainer>
                </FilterBar>
                <ContactForm />
              </ComponentWithNavigation>
            </Route>
            <Route path='/delete/:adId'>
              <ComponentWithNavigation >
                <TitleNote />
                <FilterBar >
                  <NavButtonsContainer >
                    <Browse />
                    <PostAd />
                  </NavButtonsContainer>
                </FilterBar>
                <DeleteForm />
              </ComponentWithNavigation>
            </Route>
            <Route path='/posted/:adId'>
              <ComponentWithNavigation >
                <TitleNote />
                <FilterBar >
                  <NavButtonsContainer >
                    <Browse />
                    <PostAd />
                  </NavButtonsContainer>
                </FilterBar>
                <AdPosted />
              </ComponentWithNavigation>
            </Route>
            <Route path='/'>
              <Landing />
            </Route>
          </Switch>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
