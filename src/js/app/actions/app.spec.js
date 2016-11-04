import expect from 'expect'
import { buttonClick, ENUMS }from './app'

describe('App Actions', function AppActionsTest(){
  it('returns a button click action', () => {
    expect(buttonClick()).toEqual({
      type: ENUMS.BUTTON_CLICK
    })
  });
});