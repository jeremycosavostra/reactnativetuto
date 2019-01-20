import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import chatReducer from './chat_reducer';

const rootReducer = combineReducers({
    chatReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;