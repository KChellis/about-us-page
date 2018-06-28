import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import LandingPage from './LandingPage';
import { Switch, Route} from 'react-router-dom';

function App(){
  return (
    <div>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          `}
        </style>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/aboutus' component={AboutUs}/>
      </Switch>
    </div>
  );
}

export default App;
