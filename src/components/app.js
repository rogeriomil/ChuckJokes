import React, { Component } from 'react';
import CategoryList from '../containers/category-list';
import JokeContainer from '../containers/joke-container';
import Header from './Header';
import { Columns, Column } from 're-bulma';

export default class App extends Component {
  render() {
    return (
          <div>      
            <Header />
            <div className="row-fluid">
              <div className="container">
                <CategoryList />
                <JokeContainer />
              </div>
            </div>
          </div>
    );
  }
}
