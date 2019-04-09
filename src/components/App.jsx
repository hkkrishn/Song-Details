import React, { Component } from 'react';
import {selectSong } from '../actions';
import SongList from './SongList';


class App extends Component {
  render() {
    return (
      <div>
        <SongList/>
      </div>
    );
  }
}

export default App;