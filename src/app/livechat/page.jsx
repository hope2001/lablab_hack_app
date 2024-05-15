"use client"
import React,{ createContext, useState, useRef } from 'react'
import { VoiceRecorder } from 'react-voice-recorder-player';
import Chatbox from './components/chatbox';
import ChatBox2 from './components/chatbox2';

export default function Home() {
  const [audio, setAudio] = useState([])
  let audioRef = useRef(null);
    
  return (
    <div>

{/*<VoiceRecorder
      mainContainerStyle={styles.mainContainerStyle}
      controllerContainerStyle={styles.controllerContainerStyle}
      controllerStyle={styles.controllerStyle}
      waveContainerStyle={styles.waveContainerStyle}
    />
    <Chatbox/>*/}
    <div className=' h-screen relative p-4 flex flex-col justify-between'>
        <div className='flex-1 overflow-scroll'> 
        {audio.map((item, index) => (
            <div className='w-[90%]' key={index}>
              <audio className='w-full p-2  rounded-lg' ref={audioRef} src={item} controls>
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
        <div className='flex align-center justify-center absolute bottom-0 left-0 bg-blue-500 p-2 w-full rounded-xl'> 
         <span className='flex'>  
              <ChatBox2 audiox={audio} setAudiox={setAudio}/>
         </span>
        </div>

    </div>
    </div>
  )
}
