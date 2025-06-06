// Aggiunge un prodotto
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Rimuove un prodotto
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

// Rimuove tutto
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
