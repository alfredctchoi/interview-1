import expect from 'expect'
import appReducer from './app'
import { ENUMS as APP_ENUMS } from '../actions/app'

describe('App Reducer', function AppReducerTest(){
  it('sets loading status', () => {
    const action = {
      type: APP_ENUMS.BUTTON_CLICK_LOADING
    };
    const state = appReducer(undefined, action);
    expect(state.dataLoading).toBeTruthy();
    expect(state.data).toEqual(null);
  });

  it('sets response data', () => {
    const action = {
      type: APP_ENUMS.BUTTON_CLICK_LOADED,
      payload: {
        data: 'abc'
      }
    };
    const state = appReducer(undefined, action);
    expect(state.dataLoading).toBeFalsy();
    expect(state.data).toEqual('abc');
  });
});