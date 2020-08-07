import { Listeners, EventObject } from 'tabris';
import { injectable, property, event } from 'tabris-decorators';
import { texts } from '../../resources/Resources';

@injectable
export class MainViewModel {

  @event public readonly onNext: Listeners<EventObject<this>>;
  @property public message: string = '';

  public open() {
    this.message = texts.mainViewOpenedLabel;
    this.onNext.trigger();
  }

}
