import expect from 'expect'
import {buttonClick, ENUMS}from './app'
import sinon from 'sinon';
import nock from 'nock';
import { ROOT_URL } from '../../config'

describe('App Actions', function AppActionsTest() {

  afterEach(() => {
    nock.cleanAll()
  });

  it('triggers loading and fetching of data', () => {
    // set up mock http
    nock(ROOT_URL)
      .get('/posts/1')
      .reply(200, ['p1', 'p2']);

    const action = buttonClick();
    const dispatcher = sinon.spy();
    const promise = action(dispatcher);
    expect(dispatcher.args[0][0]).toEqual({
      type: ENUMS.BUTTON_CLICK_LOADING
    });

    return promise.then(() => {
      expect(dispatcher.args[1][0]).toEqual({
        type: ENUMS.BUTTON_CLICK_LOADED,
        payload: {
          data: ['p1', 'p2']
        }
      });
    });
  });
});