import { RootState } from '../store';

// user
export const selectUser = (state: RootState) => state.user.data;
export const selectIsAuthChecked = (state: RootState) =>
  state.user.isAuthChecked;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;
export const selectLoginError = (state: RootState) => state.user.loginError;
export const selectRegisterError = (state: RootState) =>
  state.user.registerError;

// ingredients
export const selectIngredients = (state: RootState) => state.ingredients.data;
export const selectIngredientsLoading = (state: RootState) =>
  state.ingredients.isLoading;

// feeds
export const selectFeedsData = (state: RootState) => state.feeds.data;
export const selectFeedOrders = (state: RootState) =>
  state.feeds.data.orders;
export const selectFeedsLoading = (state: RootState) => state.feeds.isLoading;

// orders
export const selectUserOrders = (state: RootState) => state.orders.data;
export const selectOrderModalData = (state: RootState) =>
  state.orders.orderModalData;
export const selectOrderRequest = (state: RootState) =>
  state.orders.orderRequest;

// builder (constructor)
export const selectConstructorBun = (state: RootState) => state.builder.bun;
export const selectConstructorIngredients = (state: RootState) =>
  state.builder.ingredients;
