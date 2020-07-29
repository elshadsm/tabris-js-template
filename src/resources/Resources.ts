import { device } from 'tabris';
import { resolve } from 'tabris-decorators';
import EnglishTexts from './EnglishTexts';
import GermanTexts from './GermanTexts';
import Colors from './Colors';
import Images from './Images';
import Fonts from './Fonts';
import Sizes from './Sizes';
import Styles from './Styles';

export const colors = resolve(Colors);
export const images = resolve(Images);
export const fonts = resolve(Fonts);
export const sizes = resolve(Sizes);
export const styles = resolve(Styles);
export const texts = getTextsForLanguage(device.language);

function getTextsForLanguage(language: string) {
    if (language.split('-')[0] === 'de') {
        return resolve(GermanTexts);
    }
    return resolve(EnglishTexts);
}
