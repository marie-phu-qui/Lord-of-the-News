// Reducer to be tested
import selectReducer from '../client/reducers/index.js'
import {
    RECEIVE_NEWS, CHANGE_LANGUAGE // Only ones related to the reducer being tested
} from '../client/actions/index.js';

test('should return the initial news state', () => {
  //Arrange
  const expected = {
      news: "",
      language: null
  }
  //Act
  const actual = selectReducer(undefined, {})
  //Assert
  expect(actual).toEqual(expected)
})


describe('select_reducer', () => {

    describe('RECEIVE_NEWS', () => {
        test('returns the correct state', () => {
          const action = { type: RECEIVE_NEWS };
          const expectedState = { news: "", language: null };
      
          expect(selectReducer(undefined, action)).toEqual(expectedState);
        });
      });

    describe('CHANGE_LANGUAGE', () => {
        test('returns the correct state', () => {
            const action = { type: CHANGE_LANGUAGE };
            const expectedState = { news: "", language: null };
        
            expect(selectReducer(undefined, action)).toEqual(expectedState);
        });
    });
});