import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbBar = ({ location }) => {
  const pathnames = location.pathname.split('/').filter((x) => x);
  // console.log("patnames=>",location.pathname.split('/').filter((x) => x));
  
  return (
    <nav className="py-2" style={{backgroundColor:'rgba(1, 0, 0, 0.7)',position:'sticky',top:'50px',zIndex:'900'}}>
        <div className="container">
        <ol className="breadcrumb  m-0 p-0">
          <li className="breadcrumb-item">
            <Link to="/" className="text-white text-decoration-none col-md-6 col-sm-12">Home</Link> 
          </li>
          {pathnames.map((name, index) => (
            <li key={index} className="breadcrumb-item">
              {/* {console.log("location.key = > ",pathnames)}
              {console.log("NAme = > ",name)}*/}
              {/* {console.log("New Edition : = >" , pathnames.slice(0,index+1).join('/'))}  */}
              <Link className='text-decoration-none col-md-6 col-sm-6' to={`/${pathnames.slice(0,index+1).join('/')}`} style={{color: 'white'}}>{name}</Link>             
            </li>
          ))} 
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbBar;