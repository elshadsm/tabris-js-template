import { injectable, property } from 'tabris-decorators';
import { texts } from '../../resources/Resources';

@injectable
export class MainViewModel {

  @property public message: string = '';

  public open() {
    this.message = texts.mainViewOpenedLabel;
  }

}
