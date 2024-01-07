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
import AdvocateDashBoard from './Components/advocate/AdvocateDashBoard';
import AdminDasboard from './Components/admin/AdminDasboard';
import AdvocatePrivateRoute from './Components/advocate/AdvocatePrivateRoute';
import AdminPrivateRoute from './Components/admin/AdminPrivateRoute';
import PageNotFound from './Components/PageNotFound';
import Rights from './Components/pages/Rights';
import Laws from './Components/pages/Laws';
import Spinner from './Components/Spinner';
  
function App() {

  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/data');
        const json = await response.json();
        if (response.ok) {
          setJsonData(json);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  


  
  return (
    <div className="App">
      <Navbar/>
      {loading && <Spinner/>}
      <Chatbot data={jsonData}/>
      <Routes>
        <Route index element={<VoiceAssistant data={jsonData}/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Awareness' element={<Awareness/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='pagenotfound' element={<PageNotFound/>}/>
        <Route path='rights' element={<Rights/>}/>
        <Route path='laws' element={<Laws/>}/>


        //Admin Private Route
        <Route path='/admin' element={<AdminPrivateRoute/>}>
          <Route path='dashboard' element={<AdminDasboard />}/>
        </Route>

        <Route path='/advocate' element={<AdvocatePrivateRoute/>}>
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
