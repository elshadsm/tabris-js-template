import { Composite, TextView, Button, Constraint, Properties } from 'tabris';
import { component, bindAll } from 'tabris-decorators';
import { MainViewModel } from './MainViewModel';
import { sizes, styles } from '../../resources/Resources';

@component
export class MainView extends Composite {

  @bindAll({
    message: '#label.text'
  })
  public model: MainViewModel;

  constructor(properties: Properties<MainView>) {
    super();
    this.set(properties).append(
      <$>
        <TextView id='label'
          centerX
          padding={sizes.l}
          bottom={Constraint.next}
          {...styles.header} />
        <Button
          center
          onSelect={() => this.model.continue()}>Tap here</Button>
      </$>
    );
  }

}
