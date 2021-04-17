import React from 'react'
import { shallow } from "enzyme";

import SearchBox from '../../components/SearchBox';


describe("SearchBox", () => {
  let wrapper;
  it('should render without throwing an error', () => {
    wrapper = shallow(<SearchBox />);
    expect(wrapper).not.toBeNull();
  })
  
})
