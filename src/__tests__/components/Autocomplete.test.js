import React from 'react'
import { shallow } from "enzyme";

import Autocomplete from '../../components/Autocomplete';

describe("Autocomplete", () => {
  let wrapper;
  it('should render without throwing an error', () => {
    wrapper = shallow(<Autocomplete />);
    expect(wrapper).not.toBeNull();
  })
})
