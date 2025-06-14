import React, { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Doe', age: 40 },
];

const UserSearchWithRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );
  
  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search with Ref</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search by name"
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearchWithRef;
