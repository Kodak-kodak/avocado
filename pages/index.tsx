import { inject, observer } from 'mobx-react';
import UserInstance from '../store/UserStore';

interface HomeProps {
  UserStore: UserInstance;
}

const Home = ({ UserStore }: HomeProps) => {
  const { user } = UserStore;

  return <div>{user}</div>;
};

export default inject('UserStore')(observer(Home));
