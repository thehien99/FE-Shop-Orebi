import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    // Lấy giỏ hàng từ localStorage hoặc mặc định là mảng rỗng
    cartProduct: Array.isArray(JSON.parse(localStorage.getItem('cart'))) ? JSON.parse(localStorage.getItem('cart')) : [],
    totalPrice: 0
  },
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addProductSuccess: (state, action) => {
      state.cartProduct.push(action.payload); // Thêm sản phẩm mới vào giỏ hàng
      state.totalPrice = action.payload.quanti * action.payload.price
      localStorage.setItem('cart', JSON.stringify(state.cartProduct)); // Lưu giỏ hàng vào localStorage
    },

    // Cập nhật số lượng và giá của sản phẩm trong giỏ hàng
    updateProductQuantity: (state, action) => {
      const index = state.cartProduct.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        // Cập nhật lại số lượng và giá của sản phẩm
        state.cartProduct[index].quanti = action.payload.quanti; // Cập nhật số lượng
        state.cartProduct[index].priceProduct = action.payload.priceProduct
        localStorage.setItem('cart', JSON.stringify(state.cartProduct)); // Lưu lại giỏ hàng
      }
    },

    // Xóa sản phẩm khỏi giỏ hàng
    removeProduct: (state, action) => {
      state.cartProduct = state.cartProduct.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartProduct)); // Đồng bộ giỏ hàng với localStorage
    },
    removeAllProduct: (state, action) => {
      state.cartProduct = []
      localStorage.setItem('cart', state.cartProduct)
    }

  },
});

export const { removeAllProduct, addProductSuccess, updateProductQuantity, removeProduct } = cartReducer.actions;

export default cartReducer.reducer;
