// COMPONENTS
import TitleTask from './TitleTask/TitleTask';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

// DATA
import userData from '../data/userData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

// STYLE

const App = () => {
  return (
    <>
      <TitleTask text="Завдання 1 - Профіль соціальної мережі" />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <TitleTask text="Завдання 2 - Список друзів" />
      <FriendList friends={friends} />

      <TitleTask text="Завдання 3 - Історія транзакцій" />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
