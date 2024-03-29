import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    /* {
      pizzaId: 12,
      name: "Mediterranian",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    }, */
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const cartItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      if (cartItem) {
        cartItem.quantity += 1;
        cartItem.totalPrice = cartItem.unitPrice * cartItem.quantity;
      }
    },
    decreaseItemQuantity(state, action) {
      const cartItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      cartItem.quantity -= 1;
      cartItem.totalPrice = cartItem.unitPrice * cartItem.quantity;

      if (cartItem.quantity <= 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export function getTotalCartQuantity(state) {
  return state.cart.cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
}

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce(
    (total, currentCartItem) => total + currentCartItem.totalPrice,
    0,
  );
}

/* export function getCurrentQuantityById(id) {
  return function (state) {
    return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  };
} */

export const getCurriedCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

export const getCart = (state) => state.cart.cart;

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
