import './App.css';
import React from "react";

function App() {

  return (
    <div className="container">
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
        <h3>Pizza Spinacci</h3>
        <p>Tomtato, mozarella, spinach, and ricotta cheese</p>
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
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza/>
      <Pizza/>
      <Pizza/>
  </main>
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
