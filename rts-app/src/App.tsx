import { EventComponent } from './events/EventComponent';
import Parent from './props/Parent';
import UserSearchWithRef from './refs/UserSearchWithRef';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

function App() {
  return (
    <>
      <div>
        <Parent />
        <hr />
        <GuestList />
        <hr />
        <UserSearch />
        <hr />
        <EventComponent />
        <hr />
        <UserSearchWithRef />
      </div>
    </>
  );
}

export default App;
