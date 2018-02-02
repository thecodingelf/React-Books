import React, { Component } from 'react';
// BookList.
import BookList from '../containers/book-list';
// BookDetail.
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
