import {contentView} from 'tabris';
import {inject} from 'tabris-decorators';
import {MainViewModel} from '../views/main-view/MainViewModel';
import {MainView} from '../views/main-view/MainView';

export class App {

  constructor(
    @inject private main: MainViewModel
  ) {}

  public start() {
    contentView.append(
      <MainView stretch model={this.main}/>
    );
  }

}
