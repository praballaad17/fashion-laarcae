import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constant/routes";
import { useUser } from "../../context/userContext";

export default function CartModal() {
  const { cartProducts, total, removeProductFromCart } = useUser();
  return (
    <div className="wish-cart margin active">
      <div className="wish-item">
        {cartProducts && cartProducts.length ? (
          cartProducts.map((product) => (
            <div className="cat">
              <a className="image" href="#">
                <img src={product.product_images_1} alt="" />
              </a>
              <div className="cat_two">
                <p>
                  <a href="#">{product.title.rendered}</a>
                </p>
                <p>
                  <span className="agn">{product.quantity} </span>x
                  <span>${product.price}</span>
                </p>
              </div>
              <div className="cat_icon">
                <a
                  className="remove"
                  onClick={() =>
                    removeProductFromCart(product.id, product.price)
                  }
                >
                  ×
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="fs-5 fw-bold">No Product In cart.</div>
        )}
      </div>
      <div className="wish-item">
        <div className="cat_bottom">
          <p className="total">
            <strong>Subtotal:</strong>
            <span className="amount">${total}</span>
          </p>
          <p className="buttons">
            <Link className="button wc-forward" to={ROUTES.CART}>
              View Cart
            </Link>
            <Link className="button checkout wc-forward" to={ROUTES.CHECKOUT}>
              Checkout
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
