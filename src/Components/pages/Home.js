import React from 'react'
import Navbar from '../Navbar'
import Chatbot from '../ChatBot/Chatbot'
import VoiceAssistant from '../Voice'

export default function Home({data}) {
  return (
    <div>
      <Navbar/>
      <Chatbot />
      <VoiceAssistant data={data}/>
    </div>
  )
}
