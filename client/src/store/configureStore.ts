import { applyMiddleware, createStore } from "redux";
<<<<<<< HEAD
=======
// import { connectRouter, routerMiddleware } from "connected-react-router";
>>>>>>> a4143a5 (algorithm updates front to back)
import thunkMiddleware from "redux-thunk";
import monitorReducerEnhancer from "../enhancers/monitorReducer";
import loggerMiddleware from "../middleware/logger";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
<<<<<<< HEAD
=======
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();
>>>>>>> a4143a5 (algorithm updates front to back)

export type StoreState = ReturnType<typeof rootReducer>;

export default function configureStore(preloadedState?: {} | undefined) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];

  // const composedEnhancers = compose(...enhancers);
  const composedEnhancers = composeWithDevTools(...(enhancers as any));

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
