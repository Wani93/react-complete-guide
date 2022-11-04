import './App.css';
import Card from './components/UI/Card/Card'
import UserInput from "./components/Users/UserInput/UserInput";
import UserList from "./components/Users/UserList/UserList";
import {useState} from "react";
import Dialog from "./components/UI/Dialog/Dialog";

function App() {
  const [id, setId] = useState(1);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({title: 'test', content: '123'});

  const validUser = (newUser) => {
    const {username, age} = newUser;

    if (!username || !age) {
      return 'empty';
    } else if (age < 0) {
      return 'minus'
    }
    return 'valid'
  }

  const onAddUserHandler = (newUser) => {
    const {username, age} = newUser;
    const validState = validUser(newUser);

    switch (validState) {

    }
    if (validUser(newUser)) {
      setId((prevState) => ++prevState);
      setUsers((prevState) => {
        return [...prevState, {id, username, age}]
      })
    }
    // error
  }

  return (<div className="App">
    <Card>
      <UserInput onAddUser={onAddUserHandler}/>
    </Card>
    {users.length && <Card>
      <UserList items={users}/>
    </Card>}
    <Dialog title={error.title} content={error.content}/>
  </div>);
}

export default App;
