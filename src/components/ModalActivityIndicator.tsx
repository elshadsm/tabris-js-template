import { contentView, Composite, ActivityIndicator } from 'tabris';
import { shared } from 'tabris-decorators';
import { colors, sizes } from '../resources/Resources';

@shared
export class ModalActivityIndicator {

  public show() {
    contentView.append(
      <Composite
        class='modal-activity-indicator'
        stretch
        background={colors.gray}
        elevation={sizes.highestElevation}
        onTap={() => {/* Don't let touch events pass to covered page*/ }} >
        <ActivityIndicator
          centerX centerY
          tintColor={colors.red} />
      </Composite>
    );
  }

  public hide() {
    contentView.find('.modal-activity-indicator').dispose();
  }

}
