import axios from '../utils/axios';
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
    console.log('devUser');
    return axios.get('/main').then(res => {
      console.log('res', res);
    });
  };
}

export default UserStore;

export const UserInstance = new UserStore();
