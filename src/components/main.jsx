import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <>
      <div className="hero pb-3 mt-4">
        <div className="bg-dark text-white position-relative mx-auto" style={{ maxWidth: "1280px" }}>
          <img className="card-img img-fluid" src="./assets/main_pic.jpg" alt="Card" style={{ height: "500px", objectFit: "cover" }} />
          <div className="card-img-overlay d-flex flex-column justify-content-between">
            <div className="container mt-4 px-4">
              <h5 className="card-title display-4 text-center fw-light mb-5">New Arrivals</h5>
            </div>
            <div className="container mb-5 px-4">
              <p className="card-text fs-3 text-center d-none d-sm-block mx-auto" style={{ maxWidth: "800px" }}>
                A carefully chosen clothes and accessories that all fit together. The fabrics are breathable, absorb a good amount of water, and conduct heat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
