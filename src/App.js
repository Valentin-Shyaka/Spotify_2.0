
import './App.css';
import Rfloaters from './Rfloaters';
import Home from './Home';
import Lfloaters from './Lfloaters';
import Footer from './footer'
import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Playlist from './playlist';
import Usmusic from './usmusic'
import Afrobeats from './afrobeats';

function App() {
  return (
  <>
  <BrowserRouter>
    <Lfloaters/>
    
    

    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/playlists"} element={<Playlist/>}/>
      <Route path={'/us_music'} element={<Usmusic/>} />
      <Route path={'/Afro-Beats'} element={<Afrobeats/>}/>
    

    </Routes>
    <Rfloaters/>
    <Footer/>  
    </BrowserRouter>
  </>
    
  );
}

export default App;
