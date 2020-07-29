import { device } from 'tabris';
import { shared } from 'tabris-decorators';

const SUPPORTED_SCALE_FACTORS = [1, 1.5, 2, 3];
const FALLBACK_SCALE_FACTOR = 2;

@shared
export default class ImageProvider {

  public getImage(name: string) {
    return { src: `images/${name}.png` };
  }

  public getImageScaled(name: string) {
    let scale = closest(SUPPORTED_SCALE_FACTORS, device.scaleFactor || FALLBACK_SCALE_FACTOR);
    return { src: `images/${name}@${scale}x.png`, scale };
  }

}

function closest(array: number[], goal: number) {
  return array.reduce((prev, curr) => Math.abs(curr - goal) <= Math.abs(prev - goal) ? curr : prev);
}
