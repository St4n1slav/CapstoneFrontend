import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(15);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = (product, e) => {
    e.stopPropagation(); // Impedisce la navigazione quando si clicca sul bottone
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch("https://api.escuelajs.co/api/v1/products?limit=100"),
          fetch("https://api.escuelajs.co/api/v1/categories"),
        ]);

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        const initialProducts = productsData.slice(0, 15);

        setData(productsData);
        setFilter(initialProducts);
        setCategories(categoriesData);
      } catch (error) {
        toast.error("Failed to load products");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filterProduct = (catId) => {
    if (catId === "all") {
      setFilter(data.slice(0, visibleProducts));
    } else {
      const filtered = data.filter((item) => item.category.id === catId);
      setFilter(filtered.slice(0, visibleProducts));
    }
  };

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 15);
    setFilter(data.slice(0, visibleProducts + 15));
  };

  const Loading = () => (
    <div className="row">
      {[...Array(6)].map((_, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <Skeleton height={592} />
        </div>
      ))}
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-3">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("all")}>
          All
        </button>
        {categories.map((category) => (
          <button key={category.id} className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(category.id)}>
            {category.name}
          </button>
        ))}
      </div>

      <div className="row">
        {filter.map((product) => (
          <div className="col-md-4 mb-4" key={product.id} onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: "pointer" }}>
            <div className="card product-card h-100">
              <img
                src={product.images[0] || "https://via.placeholder.com/300"}
                alt={product.title}
                className="card-img-top p-3"
                style={{ height: "300px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}</h5>
                <p className="card-text">{product.description.substring(0, 90)}...</p>
                <p className="h5">${product.price}</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <div className="d-flex justify-content-center">
                  <button className="btn btn-outline-dark btn-sm border-0" onClick={(e) => addProduct(product, e)} style={{ boxShadow: "none" }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.length > visibleProducts && (
        <div className="text-center mt-4">
          <button className="btn btn-dark" onClick={showMoreProducts}>
            Show More Products
          </button>
        </div>
      )}
    </>
  );

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Products</h2>
          <hr />
        </div>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
