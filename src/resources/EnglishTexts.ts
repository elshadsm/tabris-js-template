import { shared } from 'tabris-decorators';
import Texts from './Texts';

@shared
export default class EnglishTexts implements Texts {

  public readonly mainViewButton: string = 'Open Users';
  public readonly mainViewOpenedLabel: string = 'Opened!';

}
