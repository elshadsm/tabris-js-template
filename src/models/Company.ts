import { property } from 'tabris-decorators';

export class Company {

  @property public name: string;
  @property public catchPhrase: string;
  @property public bs: string;

  constructor(data: any) {
    Object.assign(this, data);
  }

}
