import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  basket: [],
  wishlist: [],
};

export const fetchData = createAsyncThunk("products/fetchData", async () => {
  const response = await axios
    .get(`http://localhost:8000/products`)
    .then((res) => {
      return res.data;
    });
  console.log(response);
  return response;
});

export const postData = createAsyncThunk("products/postData", async (item) => {
  console.log("post olunur");
  const response = await axios
    .post(`http://localhost:8000/products`, item)
    .then((res) => {
      return res.data;
    });
  return response;
});

export const deleteData = createAsyncThunk("products/deleteData", async (id) => {
  const response = await axios
    .delete(`http://localhost:8000/products/`+id)
    .then((res) => {
      return res.data;
    });
  return response;
});

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let found = [...state.basket].findIndex(
        (item) => item._id == action.payload._id
      );
      if (found !== -1) {
        state.basket = current(state.basket).map((item, index) =>
          index === found ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.basket = [
          ...current(state.basket),
          { ...action.payload, quantity: 1 },
        ];
        console.log(state.basket);
      }
    },
    increaseBasket: (state, action) => {
      let found = [...state.basket].findIndex(
        (item) => item._id == action.payload._id
      );

      state.basket = current(state.basket).map((item, index) =>
        index === found ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decreaseBasket: (state, action) => {
      let found = [...state.basket].findIndex(
        (item) => item._id == action.payload._id
      );
      let foundElem = [...state.basket].find(
        (item) => item._id == action.payload._id
      );
if(foundElem==1){
  foundElem.quantity=1;
}else{
  state.basket = current(state.basket).map((item, index) =>
  index === found ? { ...item, quantity: item.quantity - 1 } : item
);
}
      
    },
    deleteBasket: (state, action) => {
      state.basket = current(state.basket).filter(
        (item) => item._id != action.payload._id
      );
    },
    addWishlist: (state, action) => {
      let found = state.wishlist.find((item) => item._id == action.payload._id);
      if (found) {
        state.wishlist = current(state.wishlist).filter(
          (item) => item._id != action.payload._id
        );
        console.log(state.wishlist);
      } else {
        state.wishlist = [...current(state.wishlist), action.payload];
        console.log(state.wishlist);
      }
    },
    deleteWishlist: (state, action) => {
      state.wishlist = current(state.wishlist).filter(
        (item) => item._id != action.payload._id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("succed");
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        console.log("failed");
        state.error = action.error.message;
      });

    builder
      .addCase(postData.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("succed");
        state.data = [...current(state.data), action.payload];
        console.log(state.data);
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
        console.log("failed");
        state.error = action.error.message;
      });

      builder
      .addCase(deleteData.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("succed");
        state.data = state.data.filter(item=>item._id!=action.payload._id)
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.status = "failed";
        console.log("failed");
        state.error = action.error.message;
      });
  },
});

export const {
  addBasket,
  addWishlist,
  deleteBasket,
  increaseBasket,
  decreaseBasket,
  deleteWishlist,
} = productSlice.actions;

export default productSlice.reducer;
