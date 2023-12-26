import './App.css';
import React , {useState, useEffect} from 'react'; 
import { Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import VoiceAssistant from './Components/Voice';
// import Mybot from './Components/bot/Mybot';
import About from './Components/pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Awareness from './Components/pages/Awareness';
import Chatbot from './Components/ChatBot/Chatbot';
import LoginPage from './Components/pages/LoginPage';
import PrivateRoute from './Components/advocate/PrivateRoute';
import AdvocateDashBoard from './Components/advocate/AdvocateDashBoard';
  
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
        <Route path='About' element={<About/>}/>
        <Route path='Awareness' element={<Awareness/>}/>
        <Route path='login' element={<LoginPage/>}/>

        <Route path='/advocate' element={<PrivateRoute/>}>
          <Route path='dashboard' element={<AdvocateDashBoard/>}/>
        </Route>
      </Routes>




      <ToastContainer position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </div>
  );
}
export default App;
