import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//import thunk from 'redux-thunk'
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./main-reducer";

import { fetchCollectionStart } from "../redux/shop/shop-sagas";

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

sagaMiddleware.run(fetchCollectionStart);

export const persistor = persistStore(store);

/* export default { store, persistor } */
