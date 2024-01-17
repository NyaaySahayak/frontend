// BreadcrumbBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const SubNavBar = ({ location }) => {
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="py-2" style={{ background: 'linear-gradient(45deg, #ff8a00, #e52e71)' }}>
      <div className="container">
        <ol className="breadcrumb bg-transparent m-0 p-0">
          <li className="breadcrumb-item">
            <Link to="/" className="text-white">Home</Link>
          </li>
          {pathnames.map((name, index) => (
            <li key={index} className="breadcrumb-item">
              <Link to={`/${pathnames.slice(0, index + 1).join('/')}`} className="text-white">{name}</Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default SubNavBar;
