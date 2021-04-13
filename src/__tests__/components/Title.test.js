import React from 'react'
import { shallow } from "enzyme";

import Title from '../../components/Title';

describe("Title", () => {
  let wrapper;
  it('should render without throwing an error', () => {
    wrapper = shallow(<Title />);
    expect(wrapper).not.toBeNull();
  })
})
