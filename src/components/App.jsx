import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Button } from './Button/Button';
import { FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Box } from './Box/Box';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <Box pt={3} width="100%" as="main">
      <Button icon={<FaUserAlt />}>Search</Button>
      <Button icon={<FaMapMarkerAlt />}>Filter</Button>
      <Button type="submit" disabled>
        LogIn
      </Button>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
