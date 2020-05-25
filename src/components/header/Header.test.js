import React from "react";
import { shallow } from "enzyme";

import { Header } from "./Header";
import CartDropdown from "../cart-dropdown/CartDropdown";

describe("Header Component", () => {
  let wrapper;
  let mockSignoutStart;
  

  beforeEach(() => {
    mockSignoutStart = jest.fn();

    const mockProps = {
      currentUser: {
        uid: "123",
      },
      hiddenCart: true,
      signOutStart: mockSignoutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header Component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("If current user is present", () => {
    it("should render signout link", () => {
      expect(wrapper.find('Styled(Link)').at(3).text()).toBe("SIGN OUT");
    });

    it('should call signOutStart when link is clicked', ()=> {
        wrapper.find('Styled(Link)').at(3).simulate('click')
        expect(mockSignoutStart).toHaveBeenCalled()
    })
  });

  describe('if current user is null', () => {
      it('should render signin link', () => {
          const mockProps = {
              currentUser: null, 
              hiddenCart: true,
              signOutStart: mockSignoutStart
          }

          const newWrapper = shallow(<Header {...mockProps} />)
          expect(newWrapper.find('Styled(Link)').at(3).text()).toBe('SIGN UP')
      })

      it('should render CartDropdown', () => {
        const mockProps = {
            currentUser: null,
            hiddenCart: false,
            signOutStart: mockSignoutStart
        }

        const newWrapper = shallow(<Header {...mockProps} />)
        expect(newWrapper.exists(CartDropdown)).toBe(true)
      })
  })

  describe('if hidden is true', () => {
      it('should not render Cart Dropdown', () => {
          expect(wrapper.exists(CartDropdown)).toBe(false)
      })
  })

});
