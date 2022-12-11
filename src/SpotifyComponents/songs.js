/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'

    const Songs = ({ songs }) => {
      return (
          
        <div className="prev-played-box">
            <h1>Recently Played</h1>
            {songs.map((song) => (
                <div className='prev-track-info'>
                    <img src={song.track.album.images[0].url} alt='album artwork' className='icon'/>
                    <div className='track-info'>
                        <div className='title'>{song.track.name}</div>
                        <div className='author'>by {song.track.artists[0].name}</div>
                    </div>
              </div>
            ))}
        </div>
      )
    };

    export default Songs