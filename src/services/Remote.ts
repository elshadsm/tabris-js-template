import { shared, inject } from 'tabris-decorators';
import Request from '../util/Request';

const TEST_URL = 'TODO';

@shared
export default class Remote {

  constructor(
    @inject private request: Request
  ) { }

  public getTestData() {
    return this.request.get({ url: TEST_URL });
  }

}
