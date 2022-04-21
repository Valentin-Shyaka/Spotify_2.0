import React from "react";
import House from "@material-ui/icons/Home"
import Class from "@material-ui/icons/Class";
import  Search from "@material-ui/icons/Search";
import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
import Favorite from "@material-ui/icons/Favorite"
import { MoreHorizRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";




function Lfloaters(){
    return(
    <div>
            <div className="lfloaters">
                <div><MoreHorizRounded className="more"/></div>
                <div className="navigators">
                    <Link to={'/home'}>
                <p id="a"><House id="icn"/>Home</p>
                    </Link>
                    <p id="a"><Search id="icn"/>Search</p>
                       
                    <p id="a"><Class id="icn"/>Library</p>
                    
                    <br/>
                    <p id="a"><PlaylistPlay id="icn"/>Create playlist</p>
                    <p id="a"><Favorite id="icn"/>Liked Songs</p>
                </div>
                <hr id="hr"/>
                <div className="lists">
                    
                    <Link to={'/Afro-Beats'}>
                    <span id="muse">Afro-Beats</span><br/><br/>
                    </Link>
                    <span id="muse">Latino Gang</span><br/><br/>
                    <Link to={'/us_music'}>
                    <span id="muse">US Music</span>
                    </Link><br/><br/>
                    <Link to={'/playlists'} >
                    <span id="muse">RWANDAN MUSIC</span>
                    </Link>
                </div>
            </div>
    </div>

    );
}
export default Lfloaters;