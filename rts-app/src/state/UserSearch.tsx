import React, { useState } from 'react';

const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Doe', age: 40 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(undefined);
  const onClick = () => {
    const foundUser = users.find(user => user.name.toLowerCase() === name.toLowerCase());
    setUser(foundUser);
  }
  return (
  <div>
    <h3>User Search</h3>
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Search by name" 
    />
    <button onClick={onClick} >Find User</button>
    <div>
        {user?.name}
        {user?.age}
    </div>
  </div>
  )
};

export default UserSearch;
