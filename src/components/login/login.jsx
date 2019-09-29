import React from 'react';
import './login.css';
import templateBuilder from '@babel/template';

function Login() {
  return (
    
      <div>
 <div className="loginForm">
                <h3>Login</h3>
               
                Email : <input type="text" />
                <br/>
                Password : <input type="text" />
                <br/>
                <button>Login</button>
                </div>

       </div>
  
  );
}

export default Login;
