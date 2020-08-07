import { property } from 'tabris-decorators';

export class Geo {

  @property public lat: string;
  @property public lng: string;

  constructor(data: any) {
    Object.assign(this, data);
  }

}
