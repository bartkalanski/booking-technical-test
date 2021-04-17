import React from 'react'
import { shallow } from "enzyme";
import mockAxios from "axios";

import Rentalcars from '../../api/Rentalcars';

describe("Rentalcars", () => {
  let wrapper;
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    mockAxios.mockClear();
  });
  it('should render without throwing an error', () => {
    wrapper = shallow(<Rentalcars />);
    expect(wrapper).not.toBeNull();
  })
  it("should call the API GET method", () => {
    expect(mockAxios.get).toHaveBeenCalledTimes(0);
    Rentalcars.get("/testurl", {}, undefined, undefined);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
})
