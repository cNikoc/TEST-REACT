import React, { useState } from "react";
import './App.css';

export default function App() {

  const [precio, setPrecio] = useState("16");
  const [tiempo, setTiempo] = useState("/ Month");
  const [pageviews, setPageviews] = useState("100k");
  const [checkBox, setCheckBox] = useState(false);

  const handleDescuento = evt => {

    setCheckBox(evt.target.checked);

    if (evt.target.checked) {
      let precioInt = parseInt(precio);
      setPrecio((precioInt - (precioInt * .25)) * 12);
      setTiempo("/ Year");
  } else  {
      let precioInt = parseInt(precio);
      setPrecio(precioInt / 9);
      setTiempo("/ Month");
    }
  }

  const handlePrecios = evt => {

    switch(evt.target.value) {

      case "1":   
          if (checkBox){
              setPrecio("72");
          } else setPrecio("8");
          
          setPageviews("10k");
      break;

      case "2":
          if (checkBox){
              setPrecio("108");
          } else setPrecio("12");

          setPageviews("50k");
      break; 

      case "3": 
          if (checkBox){
              setPrecio("144");
          } else setPrecio("16");

          setPageviews("100k");
      break;

      case "4":
          if (checkBox){
              setPrecio("216");
          } else setPrecio("24");
  
          setPageviews("500k");
      break;

      case "5":
          if (checkBox){
              setPrecio("324");
          } else setPrecio("36");
  
          setPageviews("1M");
      break;   
      default: return;
    }   
  }

  return (
    <main className="container">
    {/* titulo, circulos */}
    <header>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial, No credit card required.</p>
    </header>
    <aside>
      {/* contenido */}
      <div className="tarrif">
        <div className="page-views"> <span>{pageviews}</span> pageviews</div>
        <div className="price">
          <span>$<span className="pricefix">{precio}</span>.00</span>
          <span className="month">{tiempo}</span>
        </div>
      </div>
      {/* barra */}
      <div className="progress">
        <div className="progress-bar">
          <input type="range" min={1} max={5} defaultValue={3} step={1} className="range" onChange={handlePrecios} />
        </div>
        <div className="monthly">
          <span>Monthly Billing</span>
          <label className="switch">
            <input type="checkbox" value={checkBox} onChange={handleDescuento} />
            <span className="slider" />
          </label>
          <span>Yearly Billing</span>
          <span className="discount">25% discount</span>
        </div>
      </div>
      <hr />
      {/* boton y lis  */}
      <div className="start">
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button onClick={()=> window.open("https://cnikoc.github.io/Portfolio/")}>START MY TRIAL</button>
      </div>
    </aside>
  </main>
  );
}