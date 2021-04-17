import React from 'react'
import { shallow } from "enzyme";

import Autocomplete from '../../components/Autocomplete';

describe("Autocomplete", () => {
  let wrapper;
  it('should render without throwing an error', () => {
    wrapper = shallow(<Autocomplete />);
    expect(wrapper).not.toBeNull();
  })
  it('should not display any results if input value length is less than two', () => {
    wrapper = shallow(<Autocomplete value="" results={[]}/>);
    const results = wrapper.find(".results");
    expect(results.children()).toHaveLength(0);
  })
  it('should display no results found message', () => {
    wrapper = shallow(<Autocomplete value="xxx" results={[{ name: 'No results found' }]} />);
    const result = wrapper.find(".results__error");
    expect(result.text()).toBe('No results found');
  })
  it('should display results if input value length is more than or equal to two', () => {
    let mockResults = [{
      name: '',
      bookingId: '',
      city: '',
      region: '',
      country: '',
    }, {
      name: '',
      bookingId: '',
      city: '',
      region: '',
      country: '',
    }, {
      name: '',
      bookingId: '',
      city: '',
      region: '',
      country: '',
    }, {
      name: '',
      bookingId: '',
      city: '',
      region: '',
      country: '',
    }, {
      name: '',
      bookingId: '',
      city: '',
      region: '',
      country: '',
    }, {
      name: '',
      bookingId: '',
      city: '',
      region: '',
      country: '',
    },]
    wrapper = shallow(<Autocomplete value="abc" results={mockResults} />);
    const result = wrapper.find(".results__result");
    expect(result).toHaveLength(6);
  })
})
