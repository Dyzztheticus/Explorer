import React from 'react';
import styles from './App.module.scss';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import { Navbar, NoMatch } from 'layout';
import { Bounties, Discover, Leaderboard } from 'containers';
import { Header, Sidebar } from 'components';

const sideBarOptions = [
  { icon: 'tachometer', active: true },
  { icon: 'list-alt', active: false },
  { icon: 'trophy-alt', active: false }
];

const fn = stuff => {
  console.log(stuff);
};

const App = () => (
  <div className={styles.App}>
    <Header />
    <Sidebar options={sideBarOptions} onClick={fn} />
    <div className={`${styles.body}`}>
      <Switch>
        <Route exact path="/" component={Bounties} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
);

export default hot(module)(App);
