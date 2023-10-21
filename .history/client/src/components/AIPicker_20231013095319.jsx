import React from 'react';

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container" >
      <textarea 
        placeholder= "Ask the AI for anything..."
        rows={5}
        value={prompt}
        onChange={(e)=> setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
    </div>
  )
}

export default AIPicker