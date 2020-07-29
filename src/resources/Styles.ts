import { Properties, TextView } from 'tabris';
import { shared } from 'tabris-decorators';
import { fonts, colors } from './Resources';

@shared
export default class Styles {

  public readonly header: Properties<TextView> = {
    font: fonts.header,
    textColor: colors.gray,
    maxLines: 1
  }

}
