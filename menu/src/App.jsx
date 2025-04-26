import './App.css';
import React from "react";
import PizzaList from './data.js';



function App() {
  return (
    <div className="container">
      <Header />
      <Menu/>
    </div>
  )
}


// Components

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {PizzaList.map(pizza => {
        return ( <Pizza name={pizza.name} ingredient={pizza.ingredients} photoName= {pizza.photoName} price={pizza.price} /> );
    })}
  </main>
  )
}
function Pizza(props) {
    return (
      <div>
        <img src={props.photoName} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <Footer />
      </div>
  )
}

function Header() {
  return (
    <header className='header footer'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("we're currently open!")
  // }else{
  //   alert("Sorry we're closed");
  // }

  return <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}

export default App
