import React, {useState} from 'react';
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
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
