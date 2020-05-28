import React from "react";
import { shallow } from "enzyme";
import { CheckoutItem } from "./CheckoutItem";
import logger from "redux-logger";

describe("Checkout Item component", () => {
  let wrapper;
  let mockClearItem;
  let mockRemoveItem;
  let mockAddItem;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockRemoveItem = jest.fn();
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: "www.testImage.com",
        price: 1,
        quanity: 1,
        name: "hat",
      },
      clearItem: mockClearItem,
      removeItem: mockRemoveItem,
      addItem: mockAddItem,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it("should render", () => {
    //console.log(wrapper.debug())  
    expect(wrapper).toMatchSnapshot();
  });

  it('should call clearItem when remove button is clicked', ()=> {
      wrapper.find('.remove-button').simulate('click')
      expect(mockClearItem).toHaveBeenCalled()
  })

  it('should remove item when left arrow is clicked', ()=> {
      wrapper.find('.quantity').childAt(0).simulate('click')
      expect(mockRemoveItem).toHaveBeenCalled()
  })

  it('should add item when right arrow is clicked', ()=> {
      wrapper.find('.quantity').childAt(2).simulate('click')
      expect(mockAddItem).toHaveBeenCalled()
  })
});
