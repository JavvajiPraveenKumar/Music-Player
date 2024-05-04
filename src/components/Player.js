import React, { useState,useRef, useEffect } from 'react'
import '../App.css'

function Player({currentsong,index,next,prev}) {
  let [isplaying,setisplaying]=useState(false)
  let toggleplay=()=>{
    setisplaying(!isplaying)
  }
  let audioRef=useRef(null)
  useEffect(()=>{
    if(isplaying){
      audioRef.current.play()
    }else{
      audioRef.current.pause()
    }
  },[isplaying,index])

  
  return (
    <div>
      <audio ref={audioRef}
      src={currentsong.music}>

      </audio>
        <div className='player-card'>
          <h3 className='song-name'>{currentsong.name}</h3>
          <h5 className='Artist-name'>Artist name</h5>
        <div>
          <i class="fa-solid fa-circle-left" onClick={prev} ></i>
          {isplaying?(<i class="fa-solid fa-circle-pause" onClick={toggleplay}></i>):(<i class="fa-solid fa-circle-play"onClick={toggleplay}></i>)}
          <i class="fa-solid fa-circle-right" onClick={next}></i>
        </div>
        </div>
    </div>
  )
}

export default Player