

import './myreact.css';


function App()
{

  const login=()=>
  {

    let res=document.getElementById("txt1").value;

    alert(res);
  }

  return(
<>
  <div>
    <header>
    <h1>Bus Ticket Reservation</h1>
    <hr></hr>
    </header>
    </div>
    <div>
    <main>
   
    <table>
      <tr>
        <td>
          <label>User Name</label>

        </td>
        <td>
          <input type="text" id="txt1"></input>
        </td>
      </tr>
      <tr>
        <td>
          <label>Password</label>

        </td>
        <td>
          <input type="password"></input>
        </td>
      </tr>
      <tr>
        <td>
       

        </td>
        <td>
    <button onClick={login}>Click</button>
        </td>
      </tr>
    </table>

    </main>
    </div>
    <div>
    <hr></hr>
    <footer>
    <h4>www.sk.in</h4>
    
    </footer>
    </div>


    </>
  );

}

export default App;