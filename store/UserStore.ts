import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';

interface UserProps {
  email: string;
}

class UserStore {
  user = '';

  constructor() {
    makeObservable(this, {
      user: observable,
      getUser: action,
    });
  }

  getUser = () => {
    axios.get('/').then(res => {
      this.user = res.data.data;
    });
  };
}

export default UserStore;

export const UserInstance = new UserStore();
