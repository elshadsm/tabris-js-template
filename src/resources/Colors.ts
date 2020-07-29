import { ColorValue } from 'tabris';
import { shared } from 'tabris-decorators';

@shared
export default class Colors {

  public readonly white: ColorValue = '#FFFFFF';
  public readonly black: ColorValue = '#000000';
  public readonly blue: ColorValue = '#0000FF';
  public readonly gray: ColorValue = '#EEEEEE';
  public readonly red: ColorValue = '#FF0000';
  public readonly green: ColorValue = '#00FF00';

}
