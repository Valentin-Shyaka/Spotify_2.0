import { AccessAlarmRounded, ArrowDownwardOutlined, ArrowDownwardRounded, ArrowDropDownCircleOutlined, ArrowDropDownRounded, ArrowDropDownSharp, FavoriteOutlined, Pause, PauseCircleFilledRounded, PlayArrow, SearchRounded } from '@material-ui/icons'
import React from 'react'
import "./playlist.css"
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

  

function Playlist() {
  return (
    
        <div className='playlist'>
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
                <img src='juno.jpg' id='cover1'></img>
                <div className='about'>
                <p>Playlist</p>
                <h1>RWANDAN MUSIC</h1>
                <div>
                    <img src='3337559.jpg' id='user'></img>
                    <p id='text'><strong>vava_lantern. 4 songs, </strong> 15 min</p>
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
                {Played(1,'rompe.jpg','Rompe','Afrique','Amarira',1,'03:49','https://musiclyfer.com/wp-content/uploads/2022/02/Rompe-by-Afrique.mp3')}
                {Played(2,'forget.jpg','Forget','Kenny sol','Amaganya',2,'03:26','https://timheven.com/uploads/Kenny%20Sol%20-%20Forget%20(Prod.%20Niz%20Beatz).mp3')}
                {Played(3,'amashu.jpg','Amashu','Chriss Eazy','Fasta',2,'04:07','https://timheven.com/uploads/Chriss%20Eazy%20-%20AMASHU%20(Prod.%20Element).mp3')}
                {Played(4,'6kg.jpg','Monica','Juno Kizigenza','6KG',3,'03:21','https://timheven.com/uploads/Juno%20Kizigenza%20-%20Monica%20(Prod.%20Holybeat%20Murda).mp3')}
                {Played(5,'kuntsutsu.jpg','Kuntsutsu','Papa Cyangwe','Icyangwe',4,'03:51','https://timheven.com/uploads/Papa%20Cyangwe%20-%20Kuntsutsu%20Ft%20Juno%20kizigenza%20(Prod.%20Element).mp3')}
            
            </div>
           
            
        </div>
        
    





    
  )
}

export default Playlist