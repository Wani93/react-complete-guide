import React from "react";
import styles from './UserList.module.css'
import UserItem from "../UserItem/UserItem";

const UserList = (props) => (
  <ul className={styles['user-list']}>
    {props.items.map((item) => (
      <UserItem
        key={item.id}
        id={item.id}
      >
        {`${item.username} (${item.age} years old)`}
      </UserItem>
    ))}
  </ul>
)

export default UserList