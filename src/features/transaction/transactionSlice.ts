import { createSlice } from '@reduxjs/toolkit';

import type { Transactions } from '@types';

const initialState: Transactions = {
  items: [],
};

export const counterSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.items.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });
    },
    updateTransaction: (state, action) => {
      const updatedTransactionIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      state.items[updatedTransactionIndex] = action.payload;
    },
    deleteTransaction: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTransaction, updateTransaction, deleteTransaction } =
  counterSlice.actions;

export default counterSlice.reducer;
