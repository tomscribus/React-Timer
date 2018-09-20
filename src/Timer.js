import React from 'react';
import './App.css';

const Timer = (props) => {

    let hasStoped = "btn btn-theme timer " + (props.end === "0000-00-00 00:00:00" ? 'has-started' : 'has-stoped');

    return (
      <div>
        <button className={hasStoped}>{props.tick}</button>
        <button className={hasStoped}>{props.price} €</button>
      </div>
    );
  }

export default Timer;