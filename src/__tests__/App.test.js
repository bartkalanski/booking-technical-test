import React from 'react'
import { shallow } from "enzyme";

import App from '../App';

describe("App", () => {
  let wrapper;
  it('should render without throwing an error', () => {
    wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  })
})
