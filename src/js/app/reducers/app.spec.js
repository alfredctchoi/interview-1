import expect from 'expect'
import appReducer from './app'
import { ENUMS as APP_ENUMS } from '../actions/app'

describe('App Reducer', function AppReducerTest(){
  it('updates button click count', () => {
    const action = {
      type: APP_ENUMS.BUTTON_CLICK
    };
    expect(appReducer(undefined, action).clickCount).toBe(1);
  });
});