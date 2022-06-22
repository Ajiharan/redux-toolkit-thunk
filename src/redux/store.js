import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from "@reduxjs/toolkit";
import { APIService } from "../service/APIService";
import TodosReducer from "./todoSlice";

const appReducer = combineReducers({
  todo: TodosReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: APIService
      }
    })
});
