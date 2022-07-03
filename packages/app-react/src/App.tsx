import * as React from 'react';
import { trpc } from './trpc';

const App: React.FC = () => {
  const { data } = trpc.useQuery(['getUsers']);
  const { data: user } = trpc.useQuery(['getUser', 1]);
  const { mutate: createUser } = trpc.useMutation(['createUser']);

  console.log('data', data, user);

  const handleClick = () => {
    const name = 'John Doe';
    createUser({
      name: 'Adam',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TRPC Demo</h1>
      </header>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
      User: {JSON.stringify(user)}
      <button type="button" onClick={handleClick}>
        Create User
      </button>
    </div>
  );
};

export default App;
