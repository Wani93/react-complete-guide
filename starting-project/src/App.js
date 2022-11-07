import React, {useState, Fragment} from 'react';
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name: username, age, id: Math.random().toString()}]
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </Fragment>
  );
}

export default App;
