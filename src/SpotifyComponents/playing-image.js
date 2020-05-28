import React, { Component } from 'react'
import { Image } from './player';

class NPImage extends Component {
  constructor() {
    super()
    this.state = {
      song: '',
      artist: '',
      imageUrl: '',
      access_token: ''
    }
  }

  async componentDidMount() {
    // Get a new access token and song data to start with
    try {
      const tok = await this.refreshSpotifyToken()
      try {
        await this.getSpotifyData(tok.access_token)
      } catch (err7) {
        console.warn(`Error getting data from spotify: ${err7}`)
      }
    } catch (err0) {
      console.warn(`Error getting refresh token from spotify: ${err0}`)
    }
    // Use the access token to get now playing every 2 mins
    setInterval(async () => {
      try {
        await this.getSpotifyData(this.state.access_token)
      } catch (err2) {
        console.warn(`Error getting spotify now playing: ${err2}`)
      }
    }, 3000)
    // Refresh the access token every 45 mins
    setInterval(async () => {
      try {
        await this.refreshSpotifyToken()
      } catch (err1) {
        console.warn(`Error getting refresh token from spotify: ${err1}`)
      }
    }, 2700000)
  }

  refreshSpotifyToken = async () => {
    const token_url = 'https://accounts.spotify.com/api/token'
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
    const auth = 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64')
    const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN
    try {
      const token_res = await fetch(token_url, {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `grant_type=refresh_token&refresh_token=${refresh_token}`
      })
      try {
        const token = await token_res.json()
        this.setState({ access_token: token.access_token })
        return token
      } catch (err6) {
        console.warn(`Error converting token to json: ${err6}`)
      }
    } catch (err4) {
      console.warn(`Error fetching refresh token: ${err4}`)
    }
  }

  getSpotifyData = async (token) => {
    // Use access token to call now_playing endpoint
    const url = 'https://api.spotify.com/v1/me/player/currently-playing'
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      try {
        const data = await response.json()
        const [song, artist, imageUrl, length, currentlength] = [data.item.name, data.item.artists[0].name, data.item.album.images[0].url, data.item.duration_ms, data.progress_ms];
        const songlength = (length / 60000).toFixed(2);
        const currentposition = (currentlength / 60000).toFixed(2);
        const barstate = (currentposition / songlength) * 100 + "%"
        const timeleft = ((length - currentposition) / 60000).toFixed(2);
        this.setState({ song, artist, imageUrl, songlength, currentposition, barstate, timeleft })
      } catch (err3) {

      }
    } catch (err5) {
      console.warn(`Error fetching spotify data: ${err5}`)
    }
  }

  render() {
    return (
        <Image imageUrl={this.state.imageUrl} />
    )
  }
}

export default NPImage