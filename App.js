import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import firebase from './src/config/firebase';
import rootReducer from './src/reducers/root_reducer';
import Main from './src/Main';

const myStore = createStore(rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument(getFirestore)
    ),
    reduxFirestore(firebase)
  )
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: myStore.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
export default class App extends React.Component {
  render() {
    return (
      <Provider store={myStore}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Main />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}
