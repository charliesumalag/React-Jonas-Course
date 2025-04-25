import './App.css'
import React from "react";

function App() {

  return (
    <div>
      <Header />
      <Menu/>
    </div>
  )
}
// Components
function Pizza() {
    return (
      <div>
        <img src="pizzas/spinaci.jpg" alt="" />
        <h2>Pizza Spinacci</h2>
        <p>Tomtato, mozarella, spinach, and ricotta cheese</p>
        <Footer />
      </div>
  )
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}
function Menu() {
  return( <div>
    <h2>Our Menu</h2>
    <Pizza/>
    <Pizza/>
    <Pizza/>
  </div>)
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  if (hour >= openHour && hour <= closeHour) {
    alert("we're currently open!")
  }else{
    alert("Sorry we're closed");
  }

  return <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}

export default App
