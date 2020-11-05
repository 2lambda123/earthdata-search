import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Preferences from '../Preferences'
import PreferencesContainer
  from '../../../containers/PreferencesContainer/PreferencesContainer'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const enzymeWrapper = shallow(<Preferences.WrappedComponent />)

  return {
    enzymeWrapper
  }
}

describe('Preferences component', () => {
  test('renders the PreferencesContainer', () => {
    const { enzymeWrapper } = setup({
      location: {
        search: ''
      }
    })

    expect(enzymeWrapper.find(PreferencesContainer).length).toBe(1)
  })
})
