import React from 'react'
import { shallow } from "enzyme";

import Rentalcars from '../../api/Rentalcars';

describe("Rentalcars", () => {
  let wrapper;
  it('should render without throwing an error', () => {
    wrapper = shallow(<Rentalcars />);
    expect(wrapper).not.toBeNull();
  })
})
