
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import  productsSaga  from '../sagas/productsSaga'
import rootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(productsSaga)

export default store
