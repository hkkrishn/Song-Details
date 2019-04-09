//create Reducer
import {combineReducers} from 'redux';
//this is a named export

export const songReducer = () =>{
  return [
    {title:'Latch',duration:'4:16'},
    {title:'When a Fire Starts to Burn',duration:'4:43'},
    {title:'F for You',duration:'4:29'},
    {title:'White Noise',duration:'4:38'},
    {title:'Defeated No More',duration:'6:09'},
    {title:'Stimulation',duration:'5:22'},
    {title:'Voices',duration:'4:05'},
    {title:'Second Chance',duration:'2:22'},
    {title:'Grab Her!',duration:'5:15'},
    {title:'You & Me',duration:'4:29'},
    {title:'January',duration:'5:55'},
    {title:'Confess to Me',duration:'4:11'},
    {title:'Help Me Lose My Mind',duration:'4:06'}
  ];
}

export const selectedSongReducer = (selectedSong = null,action) => {
  if(action.type ==='SONG_SELECTED'){
    return action.payload
  }
  return selectedSong
}


export default combineReducers({
  songs:songReducer,
  selectedSong:selectedSongReducer
})