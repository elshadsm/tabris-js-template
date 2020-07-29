import { ImageValue } from 'tabris';
import { resolve, shared } from 'tabris-decorators';
import ImageProvider from '../util/ImageProvider';

@shared
export default class Images {

  private imageProvider = resolve(ImageProvider);

  public readonly test: ImageValue = this.imageProvider.getImageScaled('test');

}
