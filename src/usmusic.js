import { AccessAlarmRounded, ArrowDownwardOutlined, ArrowDownwardRounded, ArrowDropDownCircleOutlined, ArrowDropDownRounded, ArrowDropDownSharp, FavoriteOutlined, Pause, PauseCircleFilledRounded, PlayArrow, SearchRounded } from '@material-ui/icons'
import React from 'react'

import "./usmusic.css"
import {useEffect,useState} from 'react'
import  ArrowUP  from "@material-ui/icons/ArrowBackIosRounded";
import ArrowDown from "@material-ui/icons/ArrowForwardIosRounded"



function Played(number,plc,song,artist,album,days,duration,url){
    const useAudio = ()=> {
        const [audio] = useState(new Audio(url));
       
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
          
            <PlayArrow onClick={toggle}>{playing ? "Pause" : "Play"}</PlayArrow>
          
        );
      };
      
    return(
        <div className='soundtrack'>
            <div className='playarr'><Player/></div>
            <div className="number">{number}</div>
            <div><img src={plc} className="plc"></img></div>
            <div className='artist'> <p><strong>{song}</strong><br/>{artist}</p></div>
            <div className='album'>{album}</div>
            <div className='days'>{days} days ago</div>
            <div className='duration'><div><FavoriteOutlined className='like'/></div> <div className='dur'>{duration}</div></div>
        </div>
    )
}

  

function Usmusic() {
  return (
    
        <div className='usmusic'>
            <div className='space'>

            </div>

    
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
            <div className='cover1'>
                <img src='weekend.jpg' id='cover1'></img>
                <div className='about'>
                <p>Playlist</p>
                <h1>US music</h1>
                <div>
                    <img src='3337559.jpg' id='user'></img>
                    <p id='text'><strong>vava_lantern. 6 songs, </strong> 19 min</p>
                </div>
                </div>
                
            </div>
            <div className='playl'>
                <div className='identifiers'>
                    <div className='iconl'><Pause className='icol'/></div>
                   <div className='icon2'><ArrowDownwardOutlined className='icon3'/></div>
                   <SearchRounded className='icon4'/>
                   <div className='button'><span>Date Added <ArrowDropDownSharp/></span></div>

                </div>
                <div className='headers'>
                    <span><strong>#</strong> TITLE</span>
                    <span id='span'>ALBUM</span>
                    <span id='span'>DATE ADDED</span>
                    <span id='span'><AccessAlarmRounded/></span>


                </div>
                <hr/> 
                {Played(1,'tears.jpg','Save your Tears','The weeknd','Heartless',1,'04:09','https://www.cjoint.com/doc/20_11/JKExIJwM1bz_the-weeknd-save-your-tears-audio.mp3')}
                {Played(2,'lemonade.jpg','Lemonade','Internet money','Spouses',2,'03:26','https://www.thinknews.com.ng/wp-content/uploads/2020/09/Internet_Money_Ft_Gunna_Don_Toliver_NAV_-_Lemonade.mp3')}
                {Played(3,'middle.jpg','Ballin','Roddy Richh','llf',2,'03:37','https://mariannefeder.com/wp-content/uploads/2020/12/Mustard_ft_Roddy_Ricch_-_Ballin.mp3')}
                {Played(4,'love.jpg','Summer of love','Shawn Mendes','Wonder',3,'03:21','https://www.thinknews.com.ng/wp-content/uploads/2021/08/Shawn_Mendes_Ft_Tainy_-_Summer_of_Love_thinknews.com.ng.mp3')}
                {Played(5,'herro.jpg','Tyler Herro','Jack Harlow','Poppin',4,'03:51','https://www.thinknews.com.ng/wp-content/uploads/2020/10/Jack_Harlow_-_Tyler_Herro.mp3')}
            
            </div>
           
            
        </div>
        
    





    
  )
}
export default Usmusic
