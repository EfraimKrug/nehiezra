import React from 'react';
import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';
import ArticlesPage from './ArticlesPage.js';
import PesukimPage from './PesukimPage.js';
import ChassidusPage from './ChassidusPage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class TopMenu extends React.Component {
  render(){
      // console.log()
      return (
          <div>
              <Router>
                <div>
                  <ul>
                    <li className="menu">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="menu">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="menu">
                      <Link to="/articles">Articles</Link>
                    </li>
                    <li className="menu">
                      <Link to="/pasukim">Pasukim</Link>
                    </li>
                    <li className="menu">
                      <Link to="/chassidus">Chassidus</Link>
                    </li>
                  </ul>

                  <Switch>
                    <Route exact path="/">
                      <HomePage books={this.props.books}/>
                    </Route>
                    <Route path="/nehiezra">
                      <HomePage books={this.props.books}/>
                    </Route>
                    <Route path="/home">
                      <HomePage books={this.props.books}/>
                    </Route>
                    <Route path="/about">
                      <AboutPage />
                    </Route>
                    <Route path="/articles">
                      <ArticlesPage />
                    </Route>
                    <Route path="/pasukim"> 
                      <PesukimPage  pesukim={this.props.pesukim}
                                    handleSeferChange={this.props.handleSeferChange}
                                    handleChapterChange={this.props.handleChapterChange}
                                    handleVerseChange={this.props.handleVerseChange}
                                    loadPesukim={this.props.loadPesukim}
                                    nextPasuk={this.props.nextPasuk}
                                    perushim={this.props.perushim}
                                    sefer={this.props.sefer}
                                    chapter={this.props.chapter}
                                    verse={this.props.verse}
                                    perushNotes={this.props.perushNotes}
                      />
                    </Route>
                    <Route path="/chassidus">
                      <ChassidusPage />
                    </Route>
                    <Route path="/" render={() => <HomePage  books={this.props.books}/>} />
                  </Switch>
                </div>
              </Router>
        </div>
      )
    }
}

export default TopMenu;
