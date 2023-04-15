import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from "react";
import { useToast } from "./toastContext";
import axios from "axios";

const apiEndpoint = `https://fashion.laarcae.com/wp-json/wp/v2`;
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}
export function UserProvider({ userId, children }) {
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProduct] = useState([]);
  const [wishProducts, setWishProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const { addToast } = useToast();

  const addToCart = (product, qnt = 1) => {
    product = {
      ...product,
      quantity: qnt,
    };
    const cartArray = [...cartProducts, product];
    // setCartProduct((prev) => [...prev, product]);
    setCartProduct(cartArray);
    getTotal(cartArray);
  };

  const addToWishList = (product) => {
    if (product) {
      setWishProduct((prev) => [...prev, product]);
    } else {
      addToast("Product is empty!", true);
    }
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

  const getProducts = async () => {
    const { data } = await axios.get(
      `${apiEndpoint}/product?_fields=title,id,price,product_images_1,discounted_price,product_images_2,product_images_3,product_images_4,content`
    );
    console.log(data);
    setProducts(data);
  };

  const value = {
    userId,
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
    getProducts,
    products,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
