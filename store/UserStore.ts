import axios from '../utils/axios';
import { action, makeObservable, observable } from 'mobx';

interface UserProps {
  email: string;
}

class UserStore {
  user: UserProps | null = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      getUser: action,
    });
  }

  getUser = () => {
    axios.get('main/').then(res => {
      this.user = res.data.email;
    });
  };
}

export default UserStore;

export const UserInstance = new UserStore();
