import { NavigationView, Page, WidgetCollection } from 'tabris';
import { shared } from 'tabris-decorators';

@shared
export default class Navigation {

  private navigationView: NavigationView = (
    <NavigationView
      stretch
      drawerActionVisible />
  );

  public navigateTo(target: object) {
    if (!(target instanceof Page)) {
      throw new Error('Unknown target');
    }
    const pageStack = this.navigationView.pages().toArray();
    const pageIndex = pageStack.indexOf(target);
    if (pageIndex !== -1) {
      new WidgetCollection(pageStack.slice(pageIndex + 1)).dispose();
    } else {
      this.navigationView.append(target);
    }
  }

}
