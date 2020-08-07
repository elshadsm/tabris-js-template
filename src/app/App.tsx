import { inject } from 'tabris-decorators';
import { MainNavigation } from '../navigation/MainNavigation';

export class App {

  constructor(
    @inject private mainNavigation: MainNavigation
  ) { }

  public start() {
    this.mainNavigation.start();
  }

}
