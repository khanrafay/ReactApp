import React from 'react';
import './signup.css';
import templateBuilder from '@babel/template';

function Signup() {
    return (
        <div className="App">

            <div className="signUpForm">
                <h3>Sign Up</h3>
                First Name : <input type="text" />
                <br/>
                Last Name : <input type="text" />
                <br/>
                Email : <input type="text" />
                <br/>
                Password : <input type="text" />
                <br/>
                <button>Sign up</button>
                </div>

            {/* <div class="centerTable">
           Sign Up
       <table >
           <thead>Sign up</thead>
           <tr>
               <td>First Name </td>
               <td><input type="text"/></td>
           </tr>
           <tr>
               <td>Last Name </td>
               <td><input type="text"/></td>
           </tr>
           <tr>
               <td>Email Id </td>
               <td><input type="text"/></td>
           </tr>
           <tr>
               <td>Password</td>
               <td><input type="password"/></td>
           </tr>
           <tr>
               <td>Gender </td>
               <td><input type="text"/></td>
           </tr>
           <tr>
               <td><button>Sign up</button></td>
           </tr>
       </table>
       </div> */}
        </div>
    );
}

export default Signup;
