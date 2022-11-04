import React from "react";
import styles from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.wrapper}>
        <div className={styles.header}>{props.title}</div>
        <div className={styles.body}>{props.content}</div>
        <button>Okay</button>
      </div>
    </div>
  )
}

export default Dialog