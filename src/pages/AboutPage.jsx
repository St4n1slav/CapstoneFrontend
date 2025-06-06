import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-left">
          Benvenuti in Outlet, il tuo outlet di fiducia per elettronica, moda e accessori a prezzi stracciati. Da oltre 10 anni, lavoriamo direttamente con
          grandi marchi per offrirti prodotti di qualità con sconti fino al 70%. Il nostro obiettivo? Rendere il lusso accessibile a tutti, senza compromessi.
          <br />
          🔹 Stock limitato – Solo articoli in esclusiva <br />
          🔹 Spedizioni veloci – Consegniamo in 2-5 giorni <br />
          🔹 Garanzia outlet – Prodotti verificati, risparmi garantiti Scopri affari incredibili ogni settimana! <br />
        </p>
        <p className="font-italic text-center">"Paghi meno, vivi meglio."</p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
