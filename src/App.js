
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
import Landing from './landing.js'
import { createContext } from 'react';
import { useState } from 'react';


export const Appcontext=createContext(null)

function App() {
  const [username,setUsername]= useState("")
  const [homage,setHomage]=useState("")

  
  return (
  <Appcontext.Provider value={{username,homage,setUsername,setHomage}}>
  <BrowserRouter>
    {/* <Lfloaters/> */}
    
    

    <Routes>
       
      <Route path={"/"} element={<Landing/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={"/playlists"} element={<Playlist/>}/>
      <Route path={'/us_music'} element={<Usmusic/>} />
      <Route path={'/Afro-Beats'} element={<Afrobeats/>}/>
      
 
    </Routes>
     <Rfloaters/> 
    {/* <Footer/>   */}
    </BrowserRouter>
  </Appcontext.Provider>
    
  );
}

export default App;
