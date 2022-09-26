import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productCategoryReducer,
  productDetailReducer,
} from "./reducers/productReducer";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  // Add your reducers here
  productList: productListReducer,
  productCategory: productCategoryReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  productDetail: productDetailReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
