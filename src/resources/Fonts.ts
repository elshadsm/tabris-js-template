import { FontValue, Font } from 'tabris';
import { shared } from 'tabris-decorators';

@shared
export default class Fonts {

  public readonly content: FontValue = Font.from({
    size: 16,
    family: ['sans-serif']
  });
  public readonly header: FontValue = Font.from({
    size: 20,
    family: ['sans-serif'],
    weight: 'medium'
  });

}
