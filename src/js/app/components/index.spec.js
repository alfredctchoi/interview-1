import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import App from './index'

describe('App Component', function AppComponentTest(){
  it('renders "Hello World on the page"', () => {
    const app = shallow(<App/>);
    expect(app.childAt(0).text()).toBe('Hello World');
  });
});