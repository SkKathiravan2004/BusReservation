/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


import './myreact.css';
import { Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import './myreact.css';
import Gallery from './modules/Gallery';
import Contact from './modules/Contact';
import Services from './modules/Services';
import Login from './modules/Login'
import Register from './modules/Register'
import About from './modules/About'
import SearchBus from './modules/SearchBus'
import Header from './modules/Header';
import Footer from './modules/Footer';
import BookingPage from './modules/BookingPage';
// import PaymentPage from './modules/PaymentPage';



function App()
{
 
  // const login=()=>
  // {

  //   let res=document.getElementById("txt1").value;

  //   alert(res);
  // }
  return(
    <>

<Header/>

<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
  <Route path="/SearchBus" element={<SearchBus/>}></Route>
  <Route path="/Services" element={<Services/>}></Route>
  <Route path="/Gallery" element={<Gallery/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
  <Route path="/book/:busName" element={<BookingPage />} />
  {/* <Route exact path="/" component={<SearchBus/>} />
      <Route path="/payment" component={<PaymentPage/>} /> */}
</Routes>
<Footer/>
    </>
  )

}


export default App;
