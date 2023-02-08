import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

// const sagaMiddleware = createSagaMiddleware(rootSaga);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
