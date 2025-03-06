// import React from 'react'
// import { Link } from 'react-router-dom'
// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <hr></hr>

//       <table >
//       <td><Link to="/Login">Login</Link></td>
//       <td></td>
//       <td><Link to="/Register">Register</Link></td>
//       <td></td>
//       <td><Link to="/SearchBus">Search Bus</Link></td>
//       <td></td>
//       <td><Link to="/Services">Services</Link></td>
//       <td></td>
//       <td><Link to="/Gallery">Gallery</Link></td>
//       <td></td>
//       <td><Link to="/About">About</Link></td>
//       <td></td>
//       <td><Link to="/Contact">Contact</Link></td>
//       </table>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <hr />
      <div className="links-container">
        <table className="links-table">
          <tbody>
            <tr>
              <td><Link to="/Login" className="nav-link">Login</Link></td>
              <td><Link to="/Register" className="nav-link">Register</Link></td>
              <td><Link to="/SearchBus" className="nav-link">Search Bus</Link></td>
              <td><Link to="/Services" className="nav-link">Services</Link></td>
              <td><Link to="/Gallery" className="nav-link">Gallery</Link></td>
              <td><Link to="/About" className="nav-link">About</Link></td>
              <td><Link to="/Contact" className="nav-link">Contact</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

