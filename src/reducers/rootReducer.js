import { handleActions } from 'redux-actions';

import { fetchDataSuccess, editData } from '../actions/tableActions';

const initialState = {
  stockData: [],
};

export default handleActions(
  {
    [fetchDataSuccess]: (state, action) => ({
      ...state,
      stockData: state.stockData.length
        ? action.payload.map((stockItem) => {
            const existingStockItem = state.stockData.find(
              (item) => item.index === stockItem.index,
            );
            if (existingStockItem?.edited) return existingStockItem;
            return stockItem;
          })
        : action.payload,
    }),
    [editData]: (state, action) => ({
      ...state,
      stockData: state.stockData.map((stockItem) => {
        if (stockItem.index === action.payload.index) {
          return {
            ...stockItem,
            stocks: {
              ...stockItem.stocks,
              [action.payload.stockType]: action.payload.value,
            },
            edited: true,
          };
        }
        return stockItem;
      }),
    }),
  },
  initialState,
);
