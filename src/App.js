import React, { useState } from 'react'
import './App.css'
import Audiofiles from "./components/Audiofile"
import Player from "./components/Player"
import { audios } from './audioData'
function App() {
  let [songs,setsongs]=useState(audios)
  let [currentsong,setcurrentsong]=useState(audios[0])
  let[index,setindex]=useState(null)
  let getsongData=(song,index)=>{
    setindex(index)
    setcurrentsong(song)
  }
  let prev=()=>{
    setindex(index-1)
    setcurrentsong(audios[index-1])

  }
  let next=()=>{
    setindex(index+1)
    setcurrentsong(audios[index+1])
    console.log(index)
  }
  
  return (
    <>
    <div><Player currentsong={currentsong} index={index} next={next} prev={prev}/></div>
      <div className='app-min'>
        {
          songs.map((song,index)=>{
            return(
              <Audiofiles song={song} getsongData={getsongData} index={index} />
            )
          })
        }
        

      </div>
    </>
  )
}

export default App