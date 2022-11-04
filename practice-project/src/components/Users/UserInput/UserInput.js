import React, {useState} from "react";
import styles from './UserInput.module.css'

const UserInput = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }

  const onAgeChangeHandler = (event) => {
    setAge(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser({username, age})
    setUsername('');
    setAge('');
  }

  return (
    <form className={styles['user-input']} onSubmit={onSubmitHandler}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={onUsernameChangeHandler}/>
      </div>
      <div>
        <label>Age (Years)</label>
        <input type='text' value={age} onChange={onAgeChangeHandler}/>
      </div>
      <button type='submit'>Add User</button>
    </form>
  )
}

export default UserInput