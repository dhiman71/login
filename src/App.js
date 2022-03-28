import React, {useState} from 'react';
import Lform from './components/Lform';



function App() {
    const adminUser = {
        email : "aladdinapp1@exabyting.com",
        password : "aladinapp1"
    }

    const [user, setUser]= useState({email:""});
    const [error, setError]= useState("");

    const Login = details => {
        console.log(details);

        if( details.email===adminUser.email && details.password===adminUser.password){
            // console.log("Logged in"); // For checking in console
            setUser(details.email);
        } else {
            // console.log("Invalid details"); // For checking in console
            setError(" *** Ooops, Email or Password doesn't match!!!");
        }
    }
    const Logout = () => {
        // console.log("Logout"); // For checking in console
        setUser({email:""});
    }

  return (
      <div className="App">
          {(user.email != "") ? (
              <div className="Welcome">
                  <h1> Welcome, Aladin admin!!! </h1>
                  <button onClick={Logout}>Logout</button>
              </div>
          ) : (
              <Lform Login={Login} error={error} />
          )
          }
      </div>
  );
}

export default App;
