import configureStore from 'redux-mock-store';
// Actions to be tested
import * as selectActions from '../client/actions/index.js';

const mockStore = configureStore();
const store = mockStore();

describe('select_actions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    describe('receive_news', () => {
        it('Dispatches the correct action and payload', () => {
          const expectedActions = [
            {
              'news': "news",
              'type': 'RECEIVE_NEWS',
            },
          ];
      
          store.dispatch(selectActions.receiveNews("news"));
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

    describe('requestDATA', () => {
        it('Dispatches the correct action and payload', () => {
            const expectedActions = [
            {
                'type': 'REQUEST_DATA',
            },
            ];
        
            store.dispatch(selectActions.requestDATA());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('showError', () => {
        it('Dispatches the correct action and payload', () => {
            const expectedActions = [
            {
                'errorMessage': 'errorMessage',
                'type': 'SHOW_ERROR',
            },
            ];
        
            store.dispatch(selectActions.showError('errorMessage'));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('change_language', () => {
        it('Dispatches the correct action and payload', () => {
          const expectedActions = [
            {
              'language': 'language',
              'type': 'CHANGE_LANGUAGE',
            },
          ];
      
          store.dispatch(selectActions.changeLanguage("language"));
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
