import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import React from 'react'

export default function Mybot() {
  return (
    <>

    <div style={{height: "95vh",backgroundImage: `url(${require("../images/bg-images/45473.png")})`}}>
      <div className='my-auto'>  

      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider} 
        />
        </div>
    </div>
    </>
  )
}
