import React, { Component } from 'react';
import {connect} from 'react-redux';

class SongList extends Component {
  //this.props ==={songs:state.songs}
  render() {
    //console.log(this.props)
    return (
      <div>
        Dingle Songs
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
    songs:state.songs
  }
}

export default connect(mapStateToProps)(SongList);