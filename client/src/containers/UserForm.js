import React, {Component} from 'react';

class UserForm extends Component {

  render(){
    return (

    <div>
      <div>
        <h1> User Signup </h1>
      </div>
        <form>
        <div>
           <label htmlFor="username">Username:</label>
           <input type="text" name="username"/>
       </div>

        <div>
           <label htmlFor="email">E-mail:</label>
           <input type="text" name="email"/>
        </div>

        <div>
           <label htmlFor="password">Password:</label>
           <input type="password" name="password"/>
        </div>
      </form>
    </div>)
  }
}

export default UserForm
