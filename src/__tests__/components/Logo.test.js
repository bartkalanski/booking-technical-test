import React from 'react'
import { shallow } from "enzyme";

import Logo from '../../components/Logo';

describe("Logo", () => {
  let wrapper;
  it('should render without throwing an error', () => {
    wrapper = shallow(<Logo />);
    expect(wrapper).not.toBeNull();
  })
})
