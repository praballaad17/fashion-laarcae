import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}
export function UserProvider({ user, children }) {
  const [cartProducts, setCartProduct] = useState([]);
  const [wishProducts, setWishProduct] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product, qnt = 1) => {
    product = {
      ...product,
      quantity: qnt,
    };
    setCartProduct((prev) => [...prev, product]);
    getTotal();
  };

  const addToWishList = (product) => {
    setWishProduct((prev) => [...prev, product]);
  };

  const removeProductFromWishList = (productId) => {
    const unfilter = wishProducts;
    let filtered = unfilter.filter((item) => {
      return item.id != productId;
    });
    setWishProduct(filtered);
  };

  const removeProductFromCart = (productId) => {
    const unfilter = cartProducts;
    let filtered = unfilter.filter((item) => {
      return item.id != productId;
    });
    setCartProduct(filtered);
    getTotal(filtered);
    console.log(total);
  };

  const getTotal = (cartProducts = cartProducts) => {
    let sum = 0.0;
    cartProducts.map((product) => {
      sum += parseFloat(product.price) * parseFloat(product.quantity);
    });
    setTotal(sum);
  };

  const changeQuantity = (productId, qnt) => {
    const unfilter = cartProducts;
    console.log("change qnt", qnt);
    if (qnt == 0) {
      console.log("zero delete");
      removeProductFromCart(productId);
    } else {
      let filtered = unfilter.filter((item) => {
        if (item.id == productId) {
          item.quantity = parseInt(qnt);
          // setTotal((prev) => prev + parseInt(price));
        }
        return item;
      });
      console.log(filtered);
      getTotal(filtered);
      setCartProduct(filtered);
    }
  };

  console.log(cartProducts, total);
  const value = {
    user,
    cartProducts,
    total,
    getTotal,
    addToCart,
    removeProductFromCart,
    changeQuantity,
    wishProducts,
    addToWishList,
    removeProductFromWishList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
