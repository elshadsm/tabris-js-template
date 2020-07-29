import {contentView} from 'tabris';
import {inject} from 'tabris-decorators';
import {MainViewModel} from '../view/main-view/MainViewModel';
import {MainView} from '../view/main-view/MainView';

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
