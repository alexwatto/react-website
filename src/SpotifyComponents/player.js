import React from "react";
import './../index.scss';

const Image = props => {
  return (
      <div className='player'>
        <div className='track-image'>
          <img src={props.imageUrl} alt='album artwork' className='icon'/>
        </div>
      </div>
  )
}

const Info = props => {
  return (
      <div className='track-info'>
        <div className='title'>{props.song}</div>
        <div className='author'>by {props.artist}</div>
      </div>
  )
}
const Time = props => {
  return (
    <div>
      <div className='controls'>
      <div className='time-current'>{props.currentposition}</div>
        <div className='bar'>
          <div className='progress' style={{width: props.barstate}}></div>
        </div>
        <div className='time-left'>{props.timeleft}</div>
      </div>
    </div>
  )
}

const Playlist = props => {
  return (
  <div><a href={'' + props.link} target="_blank" rel="noopener noreferrer"><div className="read-more">{props.type}: {props.name}</div> </a></div> 
  )
}

const PP = props => {
  return (
    <div className='prev-track-info'>
      <div className="left"><img src={props.imageUrl} alt='album artwork' className='icon'/></div>
      <div className='title'>{props.song}</div>
      <div className='author'>by {props.artist}</div>
    </div>
  )
}


export{ Image, Info, Time, Playlist, PP }