import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbBar = ({ location }) => {
  const pathnames = location.pathname.split('/').filter((x) => x);
  // console.log("patnames=>",location.pathname.split('/').filter((x) => x));
  
  return (
    <nav className="py-2" style={{background: "linear-gradient(90deg, rgba(0,120,183,1) 0%, rgba(7,24,68,1) 100%)"}}>
        <div className="container">
        <ol className="breadcrumb bg-transparent m-0 p-0">
          <li className="breadcrumb-item">
            <Link to="/" className="text-white">Home</Link> 
          </li>
          {pathnames.map((name, index) => (
            <li key={index} className="breadcrumb-item">
              {/* {console.log("location.key = > ",pathnames)}
              {console.log("NAme = > ",name)}
              {console.log("New Edition : = >" , pathnames.slice(0,index+1).join('/'))} */}
              <Link to={`/${pathnames.slice(0,index+1).join('/')}`} style={{color: 'White'}}>{name}</Link>             
            </li>
          ))} 
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbBar;
