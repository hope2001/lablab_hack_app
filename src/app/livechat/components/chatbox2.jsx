import { useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';


export default function ChatBox2({audiox, setAudiox}){
  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    {/*const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
  document.body.appendChild(audio);*/}
    setAudiox([...audiox,url]);
  };

  return (
    <div className=''>
      <AudioRecorder 
      className=""
      showVisualizer="true"
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      {/*<button onClick={recorderControls.stopRecording}>Stop recording</button>*/}
    </div>
  )
}