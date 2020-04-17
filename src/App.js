import React from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar.js";
import Top40 from "./components/covers/top40.js";
import Zoom from "./components/zoom/zoom.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      user: {},
      open: false,
      lastfm: false,
      selected: {},
    };
    this.cleanAlbums = this.cleanAlbums.bind(this);
    this.loadData = this.loadData.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.openLastFM = this.openLastFM.bind(this);
  }

  openLastFM(url) {
    this.setState({
      lastfm: true,
    });
    setTimeout(
      () =>
        this.setState({
          lastfm: false,
        }),
      150
    );
    window.open(url, "_blank");
  }

  flipAlbum(index) {
    let albums = this.state.albums;
    albums.forEach(function (album, albumIndex) {
      if (albumIndex === index) {
        album.flipped = !album.flipped;
      } else {
        album.flipped = false;
      }
    });
    this.setState({
      albums: albums,
    });
  }

  closeDrawer() {
    this.setState({
      open: false,
    });
  }

  openDrawer(index) {
    this.setState({
      selected: this.state.albums[index],
      open: !this.state.open,
    });
  }

  toggleDrawer(index) {
    this.flipAlbum(index);
    if (this.state.open === true) {
      this.closeDrawer();
      if (this.state.selected !== this.state.albums[index]) {
        setTimeout(() => this.openDrawer(index), 150);
      }
    } else {
      this.openDrawer(index);
    }
  }

  cleanAlbums(albums) {
    let cleanedAlbums = [];
    albums.forEach((album) => {
      let newalbum = {};
      newalbum.artist = album.artist;
      newalbum.rank = album["@attr"]["rank"];
      newalbum.image = album["image"][2]["#text"];
      newalbum.image_large = album["image"][3]["#text"];
      newalbum.playcount = album.playcount;
      newalbum.url = album.url;
      newalbum.name = album.name;
      newalbum.flipped = false;
      cleanedAlbums.push(newalbum);
    });
    return cleanedAlbums;
  }

  loadData() {
    console.log("Loading: ./data/data.json");
    fetch("./data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const lastElement = data.slice(-1)[0];
        this.setState({
          albums: this.cleanAlbums(lastElement["topalbums"]["album"]),
          user: lastElement["topalbums"]["@attr"],
          selected: lastElement["topalbums"]["album"][0],
        });
      });
  }

  componentDidMount(state) {
    this.loadData();
    console.log("State Loaded!");
  }

  render() {
    const { albums, user } = this.state;

    if (albums.length > 0) {
      return (
        <div className="parent">
          <div className="wrapper">
            <NavBar attrs={user} />
            <Zoom
              lastfm={this.state.lastfm}
              openLastFM={this.openLastFM}
              selected={this.state.selected}
              open={this.state.open}
            />
            <div className="section details">Select an album for details.</div>
            <div className="section scrollable">
              <Top40
                drawerHandler={this.toggleDrawer}
                size={100}
                albums={albums}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading Please Wait</div>;
    }
  }
}
