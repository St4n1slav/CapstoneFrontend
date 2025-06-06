import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart, clearCart } from "../redux/action";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Il tuo carrello è vuoto</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              Continua lo shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Lista prodotti</h5>
                  <button onClick={handleClearCart} className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrash} className="me-2" />
                    Svuota carrello
                  </button>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id}>
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <div className="bg-image rounded" data-mdb-ripple-color="light">
                            <img
                              src={item.images?.[0] || "https://via.placeholder.com/100x75"}
                              alt={item.title}
                              width={100}
                              height={75}
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                          <p>
                            <strong>{item.title}</strong>
                          </p>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <button className="btn px-3" onClick={() => removeItem(item)}>
                              <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <p className="mx-5">{item.qty}</p>

                            <button className="btn px-3" onClick={() => addItem(item)}>
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>
                              <span className="text-muted">{item.qty}</span> x ${item.price}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Riepilogo ordine</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Prodotti ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Spedizione
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Totale</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>

                  <Link to="/checkout" className="btn btn-dark btn-lg btn-block">
                    Procedi al checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Carrello</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
