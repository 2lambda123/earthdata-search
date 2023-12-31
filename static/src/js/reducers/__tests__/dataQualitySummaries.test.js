import dataQualitySummariesReducer from '../dataQualitySummaries'
import { SET_DATA_QUALITY_SUMMARIES } from '../../constants/actionTypes'

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' }
    const initialState = {}

    expect(dataQualitySummariesReducer(undefined, action)).toEqual(initialState)
  })
})

describe('SET_DATA_QUALITY_SUMMARIES', () => {
  test('returns the correct state', () => {
    const action = {
      type: SET_DATA_QUALITY_SUMMARIES,
      payload: {
        catalogItemId: 'C10000001-EDSC',
        dataQualitySummaries: [{
          id: '1234-ABCD-5678-EFGH-91011',
          summary: 'data quality summary'
        }]
      }
    }

    const expectedState = {
      'C10000001-EDSC': [{
        id: '1234-ABCD-5678-EFGH-91011',
        summary: 'data quality summary'
      }]
    }

    expect(dataQualitySummariesReducer(undefined, action)).toEqual(expectedState)
  })
})
