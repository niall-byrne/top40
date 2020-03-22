import React from 'react';
import './App.sass';
import Tile from './components/tile/tile.js'
import NavBar from './components/navbar/navbar.js'
import Top40 from './components/top40/top40.js'
import Zoom from './components/zoom/zoom.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      user: {}
    }
    this.cleanAlbums = this.cleanAlbums.bind(this);
    this.loadData = this.loadData.bind(this);    
  }

  cleanAlbums(albums) {
    let cleanedAlbums = []
    albums.forEach(album => {
      let newalbum = {};
      newalbum.artist = album.artist;
      newalbum.rank = album['@attr']["rank"];
      newalbum.image = album['image'][2]["#text"];
      newalbum.playcount = album.playcount;
      newalbum.url = album.url;
      newalbum.name = album.name;
      cleanedAlbums.push(newalbum);
    });
    return cleanedAlbums 
  }

  loadData() {
    console.log("Loading: ./data/data.json")    
    fetch('./data/data.json')
    .then(response => response.json())
    .then((data) => {
      const lastElement = data.slice(-1)[0]
      this.setState({
        albums: this.cleanAlbums(lastElement['topalbums']['album']),
        user: lastElement['topalbums']['@attr']
      });
    });
  }

  componentDidMount(state) {    
    this.loadData();
    console.log("State Loaded!")    
  }

  render() {    
    const { albums, user } = this.state;
   
    if (albums.length > 0) {      
      return (      
        <div className="parent">
          <div className="wrapper">
            <NavBar attrs={ user }/>
            <Zoom/>
            <div className="section details">
              Select an album for details.
            </div>
            <div>
              <Top40 size={64} albums={ albums}/>
            </div>            
          </div>
        </div>
      );
    } else {
      return <div>Loading Please Wait</div>
    }        
  }
}
