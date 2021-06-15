import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import authenticationReducer from './ducks/authentication';
import registrationReducer from './ducks/registration';
import profileReducer from './ducks/profile';
import homeReducer from './ducks/home';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'authentication',
        'registration',
        'profile',
        'home'

    ]
}

const authenticationPersistConfig = {
    key: 'authentication',
    storage,
    whitelist: ['user']
}

const reducer = combineReducers({
    authentication: persistReducer(
        authenticationPersistConfig,
        authenticationReducer,
    ),
    registration: registrationReducer,
    profile: profileReducer,
    home: homeReducer,

});

const store = createStore(
    persistReducer(
        persistConfig,
        reducer
    ),
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);

export const persistor = persistStore(store);

export default store;