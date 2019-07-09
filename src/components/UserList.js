import React from 'react';
import useResources from './useResources';

const simpleStyle = {
  display: 'flex',
  width: '35vw',
  border: '1px solid black',
  margin: '5px 0',
  padding: '10px',
  borderRadius: '6px',

  additionalWidth: {width: '50%'}
};

const UserList = () => {
  const users = useResources('users');

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <div style={simpleStyle}>
            <div style={simpleStyle.additionalWidth}>
              Name/Username/Email
              <p>
                {user.name}<br/>
                {user.username}<br/>
                {user.email}<br/>
              </p>
            </div>
            <div style={simpleStyle.additionalWidth}>
              Adress:
              <p>
                {user.address.street}<br/>
                {user.address.suite}<br/>
                {user.address.city}<br/>
                {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default UserList;