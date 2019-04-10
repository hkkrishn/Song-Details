import React, { Component } from 'react'
import {connect} from 'react-redux';




const SongDetail = ({song}) => {
  if(song === null){
    return 'Please Select a Song'
  }
  //console.log(props)
  return (
    <div>
    <h3> Details for:</h3>
    <p> Title: {song.title}</p>
    <p>Duration:{song.duration}</p>
    </div>
  )
}

const mapStateToProps = (state) =>{
   return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);
