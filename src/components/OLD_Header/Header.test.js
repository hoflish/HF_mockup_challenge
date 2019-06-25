import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('Should render one <header /> element', () => {
    expect(wrapper.type()).toEqual("header");
  });

  it('Should render 3 <div /> elements as child', () => {
    expect(wrapper.find('.hf-header').children()).toHaveLength(3);
  });

});
