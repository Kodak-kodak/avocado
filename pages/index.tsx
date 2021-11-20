import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import UserInstance from '../store/UserStore';

interface HomeProps {
  UserStore: UserInstance;
}

const Home = ({ UserStore }: HomeProps) => {
  const { user } = UserStore;

  useEffect(() => {
    UserStore.getUser();
  }, [UserStore]);

  return <div>{user}</div>;
};

export default inject('UserStore')(observer(Home));
