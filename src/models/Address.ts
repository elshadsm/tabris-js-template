import { property } from 'tabris-decorators';
import { Geo } from './Geo';
import { get } from 'lodash';

export class Address {

  @property public street: string;
  @property public suite: string;
  @property public city: string;
  @property public zipcode: string;
  @property public geo: Geo;

  constructor(data: any) {
    this.street = get(data, 'street', null);
    this.suite = get(data, 'suite', null);
    this.city = get(data, 'city', null);
    this.zipcode = get(data, 'zipcode', null);
    this.geo = new Geo(get(data, 'geo', {}));
  }

}
