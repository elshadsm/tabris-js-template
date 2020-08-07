import { Composite, TextView, Button, Constraint, Properties, Listeners, EventObject } from 'tabris';
import { component, bindAll, event } from 'tabris-decorators';
import { sizes, styles, texts, colors } from '../../resources/Resources';
import { MainViewModel } from './MainViewModel';

@component
export class MainView extends Composite {

  @event public readonly onNext: Listeners<EventObject<this>>;
  @bindAll({
    message: '#label.text'
  })
  model = new MainViewModel();

  constructor(properties: Properties<MainView>) {
    super({
      background: colors.white,
      ...properties
    });
    this.createUi();
    this.registerObservers();
  }

  private createUi() {
    this.append(
      <$>
        <TextView id='label'
          centerX
          padding={sizes.l}
          bottom={Constraint.next}
          {...styles.header} />
        <Button class='open'
          center
          text={texts.mainViewButton}
          onSelect={() => this.model.open()} />
      </$>
    );
  }

  private registerObservers() {
    this.model.onNext(() => this.onNext.trigger());
  }

}
