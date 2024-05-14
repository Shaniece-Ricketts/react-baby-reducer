export const initialState = {
    products: [
      { id: 1, name: "Baby Bottle", price: 10 },
      { id: 2, name: "Diapers", price: 15 },
      { id: 3, name: "Baby Wipes", price: 8 },
    ],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case "DELETE_PRODUCT":
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload),
        };
      case "UPDATE_PRODUCT":
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
      default:
        return state;
    }
  };
  