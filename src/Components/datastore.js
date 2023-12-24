// // Data.js
// import React, { useEffect, useState } from 'react';
// import { fetchData, getData } from './dataStore';

// const Data = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchDataAndSetData = async () => {
//       await fetchData();
//       setData(getData());
//     };

//     fetchDataAndSetData();
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <ul>
//           {data.map(item => (
//             <li key={item._id}>
//               <strong>Question:</strong> {item.question} <br />
//               <strong>Answer:</strong> {item.answer}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Data;

// dataStore.js
// dataStore.js
// import axios from 'axios';

// let jsonData = { data: [] };

// export const fetchData = async () => {
//   try {
//     const response = await axios.get('http://localhost:4000/data');
//     jsonData.data = response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// export const getJsonData = () => {
//   return jsonData;
// };

