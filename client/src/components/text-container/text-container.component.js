import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './text-container.styles.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application</h1>
      <h2>Created with React, Express, Node Js and Socket.IO </h2>
      <h4>To test the app you need to open a new browser tab (localhost:3000) and join the same chat room</h4>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;