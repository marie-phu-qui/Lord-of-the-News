import reducer, {news, language} from '../client/reducers/index'
// import * as types from '../client/actions/index'

// test('should return the initial news state', () => {
//   //Arrange
//   const expected = {
//       news: "",
//       language: null
//   }
//   //Act
//   const actual = reducer(undefined, {})
//   //Assert
//   expect(actual).toEqual(expected)
// })


// test('should handle RECEIVE_NEWS', () => {
//   //Arrange
//   const fakeNews = "something interesting"
//   const action = {
//     type: 'RECEIVE_NEWS',
//     news: fakeNews
//   }
//   const expected = [fakeNews]

//   //Act
//   const actual = reducer([], action)
//   //Assert
//   expect(actual).toEqual(expected)

// })


// test('should handle CHANGE_LANGUAGE', () => {
//   //Arrange
//   const fakeLanguage = "gollum"
//   const action = {
//     type: 'CHANGE_LANGUAGE',
//     language: fakeLanguage
//   }

//   const expected = [...language, fakeLanguage]

//   //Act
//   const actual = reducer(undefined, action)
//   //Assert
//   expect(actual).toEqual(expected)

// })

describe('reducer', () => {
    const initialState = reducer(undefined, {})

    it('receives news', () => {
        const news = [{}, {}]

        const result = reducer(initialState, actions.news(news))

        expect(result).toEqual({
            ...intialState,
            news: RemoteData.success(news),        
        })
    })

    it('changes the language', () => {
        const language = [{language: ""}]
        const state = reducer(initialState, actions.language(language))
        
        const updatedLanguage = {language: translate}

        const result = reducer(state, {
            type: actions.CHANGE_LANGUAGE,
            payload: updatedLanguage,
        })

        expect(result).toEqual({
            ...state,
            language: RemoteData.success(updatedLanguage)
        })
    })
})