import { AccessAlarmRounded, ArrowDownwardOutlined, ArrowDownwardRounded, ArrowDropDownCircleOutlined, ArrowDropDownRounded, ArrowDropDownSharp, FavoriteOutlined, Pause, PauseCircleFilledRounded, PlayArrow, SearchRounded } from '@material-ui/icons'
import React from 'react'
import Layout from './Layout'
import "./afro.css"
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

  

function Afrobeats () {
  return (
    
       <Layout>
            <div className='afrobeats'>
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
                <img src='rema.jpg' id='cover1'></img>
                <div className='about'>
                <p>Playlist</p>
                <h1>Afro-Beats</h1>
                <div>
                    <img src='3337559.jpg' id='user'></img>
                    <p id='text'><strong>vava_lantern. 5 songs, </strong> 16 min</p>
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
                    <span id='span' className='albums'>ALBUM</span>
                    <span id='span'>DATE ADDED</span>
                    <span id='span'><AccessAlarmRounded/></span>


                </div>
                <hr/> 
                {Played(1,'down.jpeg','Calm Down','Rema','Ravers Roses',1,'03:39','https://thinknews.com.ng/wp-content/uploads/2022/02/Rema_Calm_Down_(thinkNews.com.ng).mp3')}
                {Played(2,'mufasa.jpg','Mufasa','Tekno','King',1,'03:26','https://thinknews.com.ng/wp-content/uploads/2022/03/Tekno_Mufasa_(thinkNews.com.ng).mp3')}
                {Played(3,'way.jpg','Way','Ckay','Ckay first',3,'03:37','https://cdn.trendybeatz.com/audio/Ckay-Way-ft-DJ-Lambo-[TrendyBeatz.com].mp3')}
                {Played(4,'kolo.jpg','Kolo','Ice Prince','Afro-Bwoy',4,'03:21','https://cdn.trendybeatz.com/audio/Ice-Prince-Ft-Oxlade-Kolo-1-(TrendyBeatz.com).mp3')}
                {Played(5,'wahala.jpeg','No Wahala','Ida Banton','Oleke',5,'03:51','https://cdn.trendybeatz.com/audio/1da-Banton-No-Wahala-(TrendyBeatz.com).mp3')}
            
            </div>
           
            
        </div>
        
    


       </Layout>



    
  )
}
export default Afrobeats;
