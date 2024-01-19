import { useState } from 'react'
import { useEffect } from 'react'
import CreateUserButton from './CreateUserButton'
import ProfileCard from './ProfileCard'
import Spinner from '../Spinner';

export default function AdminDasboard() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [changesInUser, setchangesInUser] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/getusers');
        const json = await response.json();
        setLoading(true);
        if (response.ok) {
          setUserData(json);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  },[changesInUser]);



  
  // console.log(userData)

  return (  
    <div>
      {loading && <Spinner/>}
      <CreateUserButton setchangesInUser={setchangesInUser}/> 
      {userData.map((userData) => (
                <ProfileCard key={userData._id} setchangesInUser={setchangesInUser} profile={userData} />
            ))}
    </div>
  )
}
