import './App.css';
import React from 'react'; 
import { Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import VoiceAssistant from './Components/Voice';
import Mybot from './Components/bot/Mybot';
import About from './Components/pages/About';
import Awareness from './Components/pages/Awareness';
  
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route index element={<VoiceAssistant/>}/>
        <Route path='Chatbot' element={<Mybot/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Awareness' element={<Awareness/>}/>
      </Routes>

    </div>
  );
}
export default App;
