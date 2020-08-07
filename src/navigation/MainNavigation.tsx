import { contentView } from 'tabris';
import { injectable } from 'tabris-decorators';
import { MainView } from '../views/main-view/MainView';

@injectable
export class MainNavigation {

  public start() {
    contentView.append(
      <MainView class='main-view'
        stretch
        onNext={() => this.openUserListPage()} />
    );
  }

  private openUserListPage() {
    console.log('TODO');
  }

}
