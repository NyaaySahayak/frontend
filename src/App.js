import './App.css';
import React , {useState, useEffect} from 'react'; 
import { Routes, Route , useLocation , Navigate} from "react-router-dom";
import Navbar from './Components/Navbar';
import BreadcrumbBar from './Components/BreadcrumbBar';
import VoiceAssistant from './Components/Voice';
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
import Guides from './Components/pages/Guides';
import LegalAid from './Components/pages/LegalAid/LegalAid';
import DropDownCheck from './Components/DropDownCheck';
  
function App() {

  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [changesInData, setchangesInData] = useState('');

  
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
  }, [changesInData]);

  const location = useLocation();
  console.log(location);
  const visibleRoutes = [
    '/',
    '/About',
    '/Awareness',
    '/login',
    '/pagenotfound',
    '/Awareness/rights',
    '/Awareness/laws',
    '/Awareness/guides',
    '/LegalAid',
  ];

  const shouldShowBreadcrumbBar = visibleRoutes.includes(location.pathname);
    
  return (
    <div className="App"  >
      <Navbar/>
      {loading && <Spinner/>}
      {shouldShowBreadcrumbBar && <BreadcrumbBar location={location} />}
      <Chatbot />
      <Routes>
        <Route index element={<VoiceAssistant data={jsonData}/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Awareness' element={<Awareness/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='pagenotfound' element={<PageNotFound/>}/>
        <Route path='Awareness/rights' element={<Rights/>}/>
        <Route path='Awareness/laws' element={<Laws/>}/>
        <Route path='Awareness/guides' element={<Guides/>}/>
        <Route path='LegalAid' element={<LegalAid/>}/>
        <Route path='drop' element={<DropDownCheck/>}/>


        

        <Route path='/admin' element={<AdminPrivateRoute/>}>
          <Route path='dashboard' element={<AdminDasboard />}/>
        </Route>

        <Route path='/advocate' element={<AdvocatePrivateRoute/>}>
          <Route path='dashboard' element={<AdvocateDashBoard jsonData={jsonData} setchangesInData={setchangesInData} loading={loading} />}/>
        </Route>
        <Route path="*" element={<Navigate to="pagenotfound" />} />
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
