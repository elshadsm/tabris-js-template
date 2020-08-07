import { property } from 'tabris-decorators';
import { Address } from './Address';
import { Company } from './company';
import { get } from 'lodash';

export class User {

  @property public id: number;
  @property public name: string;
  @property public username: string;
  @property public email: string;
  @property public address: Address;
  @property public phone: string;
  @property public website: string;
  @property public company: Company;

  constructor(data: any) {
    this.id = get(data, 'id', null);
    this.name = get(data, 'name', null);
    this.username = get(data, 'username', null);
    this.email = get(data, 'email', null);
    this.address = new Address(get(data, 'address', {}));
    this.phone = get(data, 'phone', null);
    this.website = get(data, 'website', null);
    this.company = new Company(get(data, 'company', {}));
  }

}
