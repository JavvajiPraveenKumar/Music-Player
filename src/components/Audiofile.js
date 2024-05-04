import React from 'react'
import '../App.css'

function Player({song,getsongData,index}) {
  return (
    <div className='product-container' onClick={()=>getsongData(song,index)}>
        <h4 className='song-name'>{song.name}</h4>
    </div>
  )
}

export default Player