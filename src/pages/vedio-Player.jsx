import React from 'react';
import videoFile from '../assets/vedio-player.mp4';

const VedioPlayer = ({ playState, setPlayState }) => {
  if (!playState) return null;

  return (
    <div style={{position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,0.8)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:1000}}>
      <video 
        src={videoFile} 
        autoPlay 
        muted 
        controls 
        style={{width:'80%', maxWidth:'900px'}} 
        onClick={() => setPlayState(false)} 
      />
    </div>
  );
};

export default VedioPlayer;
