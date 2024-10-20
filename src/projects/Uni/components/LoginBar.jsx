import React from "react";
import styles from "./LoginBar.module.css";

const LoginBar = ({ icon, text, color, mt, mb }) => {

    let additionalStyles = {
        border: `1px solid`,
        color: color ? color : orange,
        marginTop: mt ? mt : '0',
        marginBottom: mb ? mb : '0',
    }
    
  return (
    <div className={styles.bar} style={additionalStyles}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default LoginBar;
