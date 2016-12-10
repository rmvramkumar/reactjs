import React from 'react';
import auth from './auth';

class User extends React.Component {
   render() {
	   const token = auth.getToken()
      return (
         <div>
          <h2>Dashboard</h2>
          <p>Welcome to the restricated area</p>
          <p>{token}</p>
        </div>
      );
   }
}


export default User;
