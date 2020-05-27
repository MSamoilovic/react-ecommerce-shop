import React from "react";
import { shallow } from "enzyme";
import { CartIcon } from "./CartIcon";

describe("CartIcon component", () => {
  let wrapper;
  let mockToggleCartHidden;

  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };

    wrapper = shallow(<CartIcon {...mockProps} />)
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleCartHidden when icon is clicked', ()=> {
      wrapper.find('.cart-icon').simulate('click')
      expect(mockToggleCartHidden).toHaveBeenCalled()
  })

  it('should display item count correctly', ()=> {
      let parsedItemCount = parseInt(wrapper.find('.item-count').text())
      expect(parsedItemCount).toEqual(0)
  })
});
