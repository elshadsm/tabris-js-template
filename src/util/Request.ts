import { shared } from 'tabris-decorators';

const REQUEST_TIMEOUT = 10 * 1000;
const DEFAULT_REQUEST_OPTIONS: RequestOptions = {
  url: '',
  headers: {},
  requestTimeout: REQUEST_TIMEOUT,
  responseType: 'json'
};

@shared
export default class Request {

  public get(options: RequestOptions) {
    const { url, headers, requestTimeout, responseType } = Object.assign(DEFAULT_REQUEST_OPTIONS, options);
    return this.fetchWithTimeout(url, { method: 'GET', headers }, requestTimeout)
      .then(responseType === 'json' ? this.parseJson : this.parseText)
      .then((response: any) => this.validateResponse(response, url))
      .catch((error: any) => this.handleFetchError(error, url));
  }

  public post(options: RequestOptions) {
    const { url, body, headers, requestTimeout, responseType } = Object.assign(DEFAULT_REQUEST_OPTIONS, options);
    return this.fetchWithTimeout(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }, requestTimeout)
      .then(responseType === 'json' ? this.parseJson : this.parseText)
      .then((response: any) => this.validateResponse(response, url))
      .catch((error: any) => this.handleFetchError(error, url));
  }

  private fetchWithTimeout(url: string, options: any, requestTimeout = REQUEST_TIMEOUT) {
    return requestTimeout === 0 ?
      fetch(url, options) : this.timeout(requestTimeout, fetch(url, options));
  }

  private timeout(millisecond: number, promise: Promise<any>) {
    return new Promise((_resolve, _reject) => {
      const timeoutId = setTimeout(() => {
        let error = new Error('timeout');
        _reject(error);
      }, millisecond);
      promise.then(
        (result) => {
          clearTimeout(timeoutId);
          _resolve(result);
        },
        (error) => {
          clearTimeout(timeoutId);
          _reject(error);
        }
      );
    });
  }

  private handleFetchError(cause: any, url: string) {
    throw Object.assign(
      new Error('Request failed'),
      { type: 'network', url, cause });
  }

  private async parseJson(response: any) {
    try {
      const data = await response.json();
      response.body = data;
      return response;
    } catch (error) {
      console.error(`parseJson: ${error}`);
      response.body = null;
      return response;
    }
  }

  private async parseText(response: any) {
    try {
      const data = await response.text();
      response.body = data;
      return response;
    } catch (error) {
      console.error(`parseText: ${error}`);
      response.body = null;
      return response;
    }
  }

  private validateResponse(response: any, url: string) {
    if (!response.ok) {
      throw Object.assign(
        new Error(`Request failed: ${response.status} ${response.statusText}`),
        { type: 'server', url, response }
      );
    }
    return response;
  }

}

type RequestOptions = {
  url: string;
  body?: any,
  headers?: any;
  requestTimeout?: number;
  responseType?: 'text' | 'json'
};
