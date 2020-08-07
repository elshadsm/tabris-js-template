import { shared } from 'tabris-decorators';
import Texts from './Texts';

@shared
export default class GermanTexts implements Texts {

  public readonly mainViewButton: string = 'Open Users';
  public readonly mainViewOpenedLabel: string = 'Opened!';

}
