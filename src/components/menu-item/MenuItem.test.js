import React from "react";
import { shallow } from "enzyme";
import MenuItem from "./Menu-Item";

describe("MenuItem component", () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    const size = 'large';
    const linkUrl = '/hats'
    const imageURL = 'testimage' 

    beforeEach(()=> {
        mockMatch = {
            url: '/shop'
        }

        mockHistory = {
            push: jest.fn()
        }

        const mockProps = {
            match: mockMatch,
            history: mockHistory,
            linkUrl,
            imageURL,
            size,
            title: 'hats'
        }

        wrapper = shallow(<MenuItem {...mockProps} />)
    })

    it ('should render', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call history.push when the menu-item container is clicked', () => {
        wrapper.find('.menu-item').simulate('click')
        expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`)
    })

    it('should pass the size props', () => {
        expect(wrapper.find('.menu-item').hasClass(size)).toBe(true)
    })

    it('should pass the imageUrl', ()=> {
        expect(wrapper.find('.background-image').prop('style').backgroundImage).toBe(`url(${imageURL})`)
    })
});
