import React from "react";
import { shallow } from "enzyme";
import { CartDropdown } from "./CartDropdown";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

describe("Cart Dropdown", () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    mockDispatch = jest.fn();

    const mockProps = {
      history: mockHistory,
      dispatch: mockDispatch,
      cartItems: mockCartItems,
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when button is clicked", () => {
    //console.log(wrapper.debug())
    wrapper.find("SubmitButton").simulate('click');
    expect(mockHistory.push).toHaveBeenCalled()
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden())
  });

  it('should render an equal number of CartItem components as the CartItem props', ()=> {
      expect(wrapper.find('CartItem').length).toEqual(mockCartItems.length)
  })

  it('should render an empty message when Cart is empty', () => {
      const mockProps = {
          cartItems: [],
          history: mockHistory,
          dispatch: mockDispatch
      }

      const newWrapper = shallow(<CartDropdown {...mockProps} />)
      expect(newWrapper.exists('.message')).toBe(true)
  })
});
