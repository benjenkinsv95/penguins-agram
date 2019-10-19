import React from 'react'
import {itRendersWithoutCrashing} from "../../helpers/testUtils";
import Header from "./Header";
import {shallow} from 'enzyme'

const findByTestAttr = (component, attr: string) => component.find(`[data-test='${attr}']`)

describe('Header component', () => {
    let component
    beforeEach(() => {
        component = shallow(<Header/>)
    })

    itRendersWithoutCrashing(<Header/>)

    it('should render an appbar', () => {
        const appbar = findByTestAttr(component, 'title')
        expect(appbar.length).toBe(1)
    })
})
