import React from 'react'
import { shallow } from "enzyme";

import Header from '../../components/Header';

describe("Header", () => {
  let wrapper;
  it('should render without throwing an error', () => {
    wrapper = shallow(<Header />);
    expect(wrapper).not.toBeNull();
  })
})
