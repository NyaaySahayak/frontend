import './App.css';
import React , {useState, useEffect} from 'react'; 
import { Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import VoiceAssistant from './Components/Voice';
import Mybot from './Components/bot/Mybot';
import About from './Components/pages/About';
import Awareness from './Components/pages/Awareness';
import Chatbot from './Components/ChatBot/Chatbot';
  
function App() {

  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/data');
        const json = await response.json();
        if (response.ok) {
          setJsonData(json);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <Chatbot data={jsonData}/>
      <Routes>
        <Route index element={<VoiceAssistant data={jsonData}/>}/>
        <Route path='Chatbot' element={<Mybot/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Awareness' element={<Awareness/>}/>
      </Routes>

    </div>
  );
}
export default App;
