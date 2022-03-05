import React from "react"
import  ArrowUP  from "@material-ui/icons/ArrowBackIosRounded";
import ArrowDown from "@material-ui/icons/ArrowForwardIosRounded"
import PlayArrow from "@material-ui/icons/PlayArrow";
import  { useState, useEffect } from "react";






function Playlists(image,list){
    return(
        <div>
            <div id="new">
            <img src={image} alt="" id="img"/>
            <div id="gm">  <p id="gh">{list}</p></div>
            <div className="play"><Player/></div>
            </div>
            
        </div>
        
    );
}



function Suggestions(cover,mix,artists,id){
    return(
       
                    <div className="mkd">
                        <img src={cover} alt="" id={id}/>
                        <h4>{mix}</h4>
                        <p>{artists}</p>
                        <div className="play"><Player/></div>
                        
                    </div>
                   
       
                    
        
    );
}
function Empty(){
    return(
        <div className="homefooter">

        </div>
    );
}



const useAudio = url => {
  const [audio] = useState(new Audio("https://cdn.trendybeatz.com/audio/Ckay-Emiliana-(TrendyBeatz.com).mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    
      <PlayArrow className="icon" onClick={toggle}>{playing ? "Pause" : "Play"}</PlayArrow>
    
  );
};



function Home(){


    return(
        <div>
                <div className="home">
                <div>

                </div>
                <br/><br/>
                <div class="bro">
                    <div className="i">
                   
                        <ArrowUP className="i"/>
                        <ArrowDown className="i"/>
                   
                    </div>
                    <div class="user">
                        <input type="button" value="Upgrade" id="up"/>
                        <input type="button" value="vava_lantern" id="up"/>
            
            
                    </div>

                </div>
                
                <div className="homeimage">
                    

                </div>
                <h3 id="gd">Good morning</h3>
                <div className="pops">
                    <div className="new">
                        {Playlists('liked.png','Liked songs')}
                        {Playlists('us.jpg','US Hits')}
                    </div>
                    <div className="new">
                        {Playlists('afro.jpg','Afro Beats')}
                        {Playlists('ckay.jpg','C-Kay Hits')}
                    </div>
                    <div className="new">
                        {Playlists('rdhit.jpg','Rwandan Hits')}
                        {Playlists('latino.png','Latino Hits')}
                    </div>

                </div>
                <h3 id="go">Made For vava_lantern</h3>
                <div className="madefor">
                    {Suggestions('lil.jpg','Daily mix 1','Lil Nas X,Rema and others','koh')}
                    {Suggestions('bad.jpg','Daily mix 2','DaBaby,Roddy Rich and others','koh1')}
                    {Suggestions('arizona.jpg','Daily mix 3','Arizona Zervas,Mustard and others','koh2')}
                    {Suggestions('pop.jpg','Daily mix 4','Pop Smoke,50 Cent and others','koh3')}
                    
                   
                   

                </div>
                <h3 id="you">Your top Mixes</h3>
                <div className="madefor">
                   
                    {Suggestions('shawn.jpg','Shawn Mix','The best songs of shawn mendes','koh3')}
                    
                    {Suggestions('billie.jpg','Studying Mix','The mix that makes you groove','koh2')}
                    
                    {Suggestions('cash.jpg','Chill Mix','Best songs you need to chill out','koh1')}
                   
                    {Suggestions('bombs.jpg','Mood Mixes','songs of 24kGoldyn, pop smoke and others','koh')}

                </div>
                <div>
                {Empty()}
                </div>


            </div>
        </div>

    );
}
export default Home;
export {};