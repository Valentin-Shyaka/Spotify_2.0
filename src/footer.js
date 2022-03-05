import React from "react"
import Favorite from "@material-ui/icons/Favorite"

import PlayCircleFilledOutlined from "@material-ui/icons/PlayCircleFilledOutlined"

import MicRounded from "@material-ui/icons/MicRounded";





import "./footer.css"
import { BluetoothConnectedRounded, QueueMusicRounded, RepeatRounded, ShuffleRounded,SkipNextRounded,SkipPreviousRounded,  VolumeUpRounded } from "@material-ui/icons"


import  { useState, useEffect } from "react"








function Footer(){
  let references=['https://musiclyfer.com/wp-content/uploads/2022/02/Rompe-by-Afrique.mp3','https://www.morexlusive.com/wp-content/uploads/2021/04/Justin_Bieber_Ft_The_Kid_LAROI_-_Unstable.mp3'];
  let [i,setI] = useState(0);
  let [song,setSong]=useState('ROMPE')
  let [cover,setCover]=useState("rompe.jpg")
  let [artist,setArtist]=useState("Afrique")
  const [audio,setAudio] = useState(new Audio(references[i]));
  

  function Next(){
    if(i <references.length){
      setI((prev)=>prev+1);
      setArtist("Justin Bieber");
      setSong("Unstable");
      setCover('justice.jpeg')
    }
    else{
      setI(0);
    }
    
      
    setAudio(new Audio(references[i]))
    //  console.log(audio)
  };
  function Previous(){
    if(i !== 0){
      setI((prev)=>prev-2);
      setArtist("Afrique");
      setSong("Rompe");
      setCover("rompe.jpg")
    }else{
      setI(references.length-1);
    }
    setAudio(new Audio(references[i]))

    
    
  };
  
  
   
  const useAudio = url => {
   
 
    // const [audio,setaudio] = useState(new Audio(references[i]));
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
  
  const Player = (references) => {
    const [playing, toggle] = useAudio(references[i]);
  
    return (
      <div>
        <SkipPreviousRounded className="icon" onClick={Previous}  ></SkipPreviousRounded>
        <PlayCircleFilledOutlined className="icon" onClick={toggle}>{playing ? "Pause" : "Play"} </PlayCircleFilledOutlined>
        <SkipNextRounded className="icon" onClick={Next} ></SkipNextRounded>
       
      </div>
    );
  };
  
  


  
    return(
        <div className="foot">
            <div className="songinfo">
              {/* {JSON.stringify(references[i])} */}
                <div className="cover">
                    <img src={cover} alt="ckay"></img>
                </div>
                <div className="Text">
                    <h4>{song}</h4>
                    <p>{artist}</p>
                </div>
                <Favorite className="favorite"/>

            </div>
            <div className="prog">
                <div className="Icons">
                    <ShuffleRounded className="icon"/>
                    
                    
                     <Player/>  
                  
                  
                    <RepeatRounded className="icon"/>
                </div>
                
                <div className="Progression">
                    <div id="start">1:36</div>
                
                    <div className="length"><div className="level"></div></div>
                    <div id="end">3:39</div>
                    

                </div>
                
            </div>
            <div className="icons2">
                <MicRounded className="ic2"/>
                <QueueMusicRounded className="ic2"/>
                 < BluetoothConnectedRounded className="ic2"/>
                <VolumeUpRounded className="ic2"/> 
                <div className="volume"> <div className="vlevel"></div></div>


            </div>




        </div>
    );
}
export default Footer;