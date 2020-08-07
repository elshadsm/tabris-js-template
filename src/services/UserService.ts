import { shared, inject } from 'tabris-decorators';
import { User } from '../models/User';
import { get } from 'lodash';
import Request from '../util/Request';

const URL = 'https://jsonplaceholder.typicode.com/users';
const KEY_USER_DATA = 'user-data';

@shared
export default class UserService {

  private userList: User[] = [];

  constructor(
    @inject private request: Request
  ) { }

  public async get(): Promise<User[]> {
    if (this.userList.length) {
      return this.userList;
    }
    this.userList = await this.fetch();
    return this.userList.length ? this.userList : this.loadFromStorage();
  }

  private async fetch(): Promise<User[]> {
    try {
      const response = await this.request.get({ url: URL });
      const body = get(response, 'body', []);
      const list = body.map((data: any) => new User(data));
      this.persist(list);
      return list;
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  private loadFromStorage(): User[] {
    const data = localStorage.getItem(KEY_USER_DATA);
    return data ? JSON.parse(data) : [];
  }

  private persist(list: User[]) {
    localStorage.setItem(KEY_USER_DATA, JSON.stringify(list));
  }

  private clear() {
    localStorage.removeItem(KEY_USER_DATA);
  }

}
